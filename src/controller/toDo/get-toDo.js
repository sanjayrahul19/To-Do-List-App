import { toDo } from "../../model/to-do";
import { responseHandler } from "../../response/responseHandler";

export const getToDo = async (req, res) => {
  try {
    const id = req.params.id;
    const toDos = await toDo
      .findById({ _id: id })
      .select("-__v")
      .populate("user", { name: 1, email: 1 });
    return responseHandler(res, 200, "toDo sent successfully", true, toDos);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
