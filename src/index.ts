import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import * as console from "console";
import { ERROR_CODES } from "./constants/http-codes";
import openShotRoutes from "./router/open-shot-routes";
import { loggerCreator } from "./utils/logger";
import openShotConfigs from "./constants/open-shot-configs";

const app = express();

/* default port to listen*/
const PORT = openShotConfigs.proxy.port;
const HOST = openShotConfigs.proxy.host;

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* Set special headers for CORS */
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

/*Routing*/
app.use(openShotRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  loggerCreator.error(err.stack.toString());
  res.status(ERROR_CODES.SERVER_ERROR).send({ error: "Something wrong!" });
});

/* start the Express server */
app.listen(PORT, HOST, () => {
  loggerCreator.info(`Server started at ${HOST}:${PORT}`);
});
