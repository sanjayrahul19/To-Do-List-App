import { toDo } from "../../model/to-do";
import { responseHandler } from "../../response/responseHandler";

export const toDoCreation = async (req, res) => {
  try {
    const toDos = await new toDo({
      user: req.body.user,
      toDo: req.body.toDo,
      description: req.body.description,
      comment: req.body.comment,
    }).populate("user", { name: 1 });
    await toDos.save();
    return responseHandler(res, 200, "toDo created successfully", true, toDos);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
