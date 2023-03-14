import { User } from "../../model/user";
import cron from "node-cron";

export const cronUnBan = async (id) => {
  const user = await User.findById(id);
  if (user.rejections === 1) {
    cron.schedule("* * * * *", async () => {
      const user = await User.findByIdAndUpdate(
        { _id: id },
        { isApproved: 0, isBanned: false },
        { new: true }
      );
    });
  }
  if (user.rejections === 2) {
    const unBanFourDays = cron.schedule("* * * * *", async () => {
      const user = await User.findByIdAndUpdate(
        { _id: id },
        { isApproved: 0, isBanned: false },
        { new: true }
      );
    });
  }
};
