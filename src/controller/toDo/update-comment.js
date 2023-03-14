import { toDo } from "../../model/to-do";
import { responseHandler } from "../../response/responseHandler";

export const updateComment = async (req, res) => {
  try {
    const id = req.params.id;
    const toDos = await toDo.findByIdAndUpdate(
      { _id: id },
      {
        comment: req.body.comment,
      },
      { new: true }
    );
    return responseHandler(
      res,
      200,
      "comment updated successfully",
      true,
      toDos
    );
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
