import { User } from "../../model/user";
import { responseHandler } from "../../response/responseHandler";
import { cronUnBan } from "./unBan";

export const userRejected = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findById({ _id: id });
    if (users.isBanned ) {
      return responseHandler(res, 500, "User Already banned", false);
    } else if (users.rejections <= 2) {
      const user = await User.findByIdAndUpdate(
        {
          _id: id,
        },
        { isApproved: 2, isBanned: true, $inc: { rejections: 1 } },
        { new: true }
      );
      responseHandler(res, 200, "User Banned", true);
      return cronUnBan(id);
    } else {
      return responseHandler(res, 200, "User is Permanently Banned", true);
    }
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
