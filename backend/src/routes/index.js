import express from "express";
import users from "./api/v1/users";

const rootRouter = express.Router();

rootRouter.use("/api/v1/users", users);

export default rootRouter;