import { toDo } from "../../model/to-do";
import { responseHandler } from "../../response/responseHandler";

export const yesterdayTask = async (req, res) => {
  try {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    const ds = JSON.stringify(d).slice(1, 11);

    // const yesterday = new Date(today);
    // yesterday.setDate(today.getDate() - 1);
    // console.log(yesterday.toDateString());
    // const toDoes = await toDo.find({});

    const items = await toDo.find({}).populate("user", { name: 1 });
    let toDos = [];
    for (let i = 0; i < items.length; i++) {
      const a = items[i].createdAt;
      const b = JSON.stringify(a).slice(1, 11);
      console.log(b);
      if (ds === b) {
        toDos.push(items[i]);
      } else {
        console.log("not ok");
      }
    }
    return responseHandler(
      res,
      200,
      "Yesterday Task sent successfully",
      true,
      toDos
    );
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
