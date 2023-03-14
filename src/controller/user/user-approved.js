import { User } from "../../model/user";
import { responseHandler } from "../../response/responseHandler";

export const userApproved = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(
      {
        _id: id,
      },
      { isApproved: 1 },
      { new: true }
    );
    return responseHandler(res, 200, "Approved", true);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
