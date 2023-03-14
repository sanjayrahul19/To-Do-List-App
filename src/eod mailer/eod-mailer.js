import nodeMailer from "nodemailer";

export const eodMailer = function (status, tasks, user) {
  // for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].task);
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "sanjaytest1999@gmail.com",
        pass: "ytcgqafyjviximny",
      },
    });
    const info = transporter.sendMail({
      from: "sanjaytest1999@gmail.com",
      to: user,
      subject: "Verify Your Email -Node Team",
      html: `
          <div>
          <p>Task for : ${status}</p>
         <p>${tasks}</p>
        <p>Thank and Regards</p>
        <p>From Mini Team</p>
          </div>
          `,
    });
  // }
};
