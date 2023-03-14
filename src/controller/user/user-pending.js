import { User } from "../../model/user";
import { responseHandler } from "../../response/responseHandler";

export const pendingUsers = async (req, res) => {
  try {
    const users = await User.find({ isApproved:0 }).select("-__v");
    return responseHandler(
      res,
      200,
      "Approve pending users sent successfully",
      true,
      users
    );
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
