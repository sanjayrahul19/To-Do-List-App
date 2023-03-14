import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    toDo: {
      type: String,
      required: true,
    },
    taskCreatedAt: {
      type: String,
      default: new Date().toDateString(),
    },
    description: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Unstarted", "Inprogress", "completed"],
      default: "Unstarted",
    },
  },
  { timestamps: true }
);

export const toDo = mongoose.model("toDo", toDoSchema);
