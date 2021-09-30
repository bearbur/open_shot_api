import { NextFunction, Request, Response } from "express";
import { loggerCreator } from "../../utils/logger";
import { ERROR_CODES } from "../../constants/http-codes";

export const createProjectHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body, headers } = req;

  loggerCreator.info({ body, headers });

  res.status(ERROR_CODES.SERVER_ERROR);
  res.send([]);
};
