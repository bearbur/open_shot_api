import express from 'express';
import openShotConfigs from "../constants/open-shot-configs";
import {createProjectHandler} from "./open-shot-routes-midleware'/create-project-handler";

const { endpoints } = openShotConfigs;

const router = express.Router();

router.post(`/${endpoints.projects.url}`, [createProjectHandler])

export default router;

