import { toDo } from "../../model/to-do";
import { User } from "../../model/user";
import cron from "node-cron";
import { responseHandler } from "../../response/responseHandler";
import { eodMailer } from "../../eod mailer/eod-mailer";

export const eod = async (req, res) => {
  try {
    return responseHandler(res, 200, "toDo sent successfully", true);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};

const eodFunction = async () => {
  const d = new Date();
  const ds = JSON.stringify(d).slice(1, 11);
  const startDate = ds + "T00:00:00.000+00:00";
  const endDate = ds + "T23:59:59.000+00:00";

  const user = await User.find({});
  for (let i = 0; i < user.length; i++) {
    const tasks = await toDo
      .find({
        $and: [
          {
            user: user[i]._id,
            createdAt: { $gt: startDate, $lte: endDate },
          },
        ],
      })
      .populate("user", { name: 1, email: 1 });
    const toDos = [];
    if (tasks.length !== 0) {
      for (let j = 0; j < tasks.length; j++) {
        toDos.push(tasks[j].toDo);
        const user = tasks[j].user.email;
        const status = tasks[j].status;
        if (tasks.length - 1 === j) {
          eodMailer(status, toDos, user);
        }
      }
    } else {
      // console.log("No Task");
    }
  }
};

eodFunction();

cron.schedule("* * * * *", async () => {
  // const result = await eodFunction();
  // console.log(result, "result");
  // console.log("ok");
  // const eod =await  eodFunction();
  // console.log(eod)
  // eodMailer(result);
});

// const eodFunction = async () => {
//   const d = new Date();
//   const ds = JSON.stringify(d).slice(1, 11);
//   // const times = "T14:58:23.144+00:00";
//   const startDate = ds + "T00:00:00.000+00:00";
//   const endDate = ds + "T23:59:59.000+00:00";
//   const toDos = await toDo
//     .find({
//       $and: [
//         {
//           createdAt: { $gt: startDate, $lte: endDate },
//           status: "Inprogress",
//         },
//       ],
//     })
//     .populate("user", { name: 1, email: 1 });
//   const arr = [];
//   for (let i = 0; i < toDos.length; i++) {
//     const obj = {};
//     const t = [];
//     obj.id = toDos[i].user._id;
//     obj.name = toDos[i].user.name;
//     obj.email = toDos[i].user.email;
//     t.push(toDos[i].toDo);
//     obj.task = t;
//     const status = arr.some(function (el) {
//       return el.id === toDos[i].user._id;
//     });

//     if (status) {
//       for (let j = 0; j < arr.length; j++) {
//         if (toDos[i].user._id === arr[j].id) {
//           arr[j].task.push(toDos[i].toDo);
//         }
//       }
//     } else {
//       arr.push(obj);
//     }
//     if (toDos.length - 1 === i) {
//       return arr;
//     }
//   }
// };
