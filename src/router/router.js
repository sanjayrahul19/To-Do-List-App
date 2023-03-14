import { Router } from "express";
import { userRouter } from "./user-router/userRouter";
import { toDoRouter } from "./todo-router/todo-router";
export const router = Router();

router.use("/api/v1/user", userRouter);
router.use("/api/v1/todo", toDoRouter);
