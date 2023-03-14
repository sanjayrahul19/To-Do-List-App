import { Router } from "express";
export const toDoRouter = Router();
import { toDoCreation } from "../../controller/toDo/create-toDo";
import { deleteToDo } from "../../controller/toDo/delete-toDo";
import { getToDo } from "../../controller/toDo/get-toDo";
import { getAllToDo } from "../../controller/toDo/getAll-toDo";
import { updateComment } from "../../controller/toDo/update-comment";
import { updateToDo } from "../../controller/toDo/update-toDo";
import { yesterdayTask } from "../../controller/toDo/yesterdayTask";
import { permit } from "../../middleware/permit";
import { role } from "../../middleware/role";

toDoRouter.post("/create", toDoCreation);
toDoRouter.delete("/delete/:id", deleteToDo);
toDoRouter.patch("/update/:id", updateToDo);
toDoRouter.get("/get/:id", getToDo);
toDoRouter.get("/getall", role, permit(["admin"]), getAllToDo);
toDoRouter.patch("/update/comment/:id", updateComment);
toDoRouter.get("/yesterdaytask", yesterdayTask);
