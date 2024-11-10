import express from "express";

import { pingCheck } from "../../controllers/pingController";

const v1Router = express.Router();
console.log("hello word")
v1Router.get("/ping",pingCheck);
export default v1Router;