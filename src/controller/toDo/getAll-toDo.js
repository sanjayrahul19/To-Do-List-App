import { toDo } from "../../model/to-do";
import { responseHandler } from "../../response/responseHandler";

export const getAllToDo = async (req, res) => {
  try {
    const toDos = await toDo
      .find()
      .populate("user", { name: 1, email: 1 })
      .select("-__v");
    return responseHandler(res, 200, "toDo sent successfully", true, toDos);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
