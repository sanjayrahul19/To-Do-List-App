import { toDo } from "../../model/to-do";
import { responseHandler } from "../../response/responseHandler";

export const updateToDo = async (req, res) => {
  try {
    const id = req.params.id;
    const toDos = await toDo.findByIdAndUpdate(
      { _id: id },
      {
        toDo: req.body.toDo,
        description: req.body.description,
        comment: req.body.comment,
      },
      { new: true }
    );
    return responseHandler(res, 200, "toDo updated successfully", true, toDos);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
