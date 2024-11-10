import express from "express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";

const app = express();
// serverConfig.PORT
app.use('/v1',apiRouter);
app.listen(5000, () => {
    console.log(`Server starting at the port: ${serverConfig.PORT}`);
});
