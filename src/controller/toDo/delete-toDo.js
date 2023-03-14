import { toDo } from "../../model/to-do";
import { responseHandler } from "../../response/responseHandler";

export const deleteToDo = async (req, res) => {
  try {
    const id = req.params.id;
    const toDos = await toDo.findByIdAndDelete({ _id: id });
    return responseHandler(res, 200, "toDo deleted successfully", true);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
