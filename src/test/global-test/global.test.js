import mongoose from "mongoose";
import { userLogin } from "../auth-test/user-login";
import { signUp } from "../auth-test/user-signup";
import { userVerify } from "../auth-test/user-verify";
import { userApprove } from "../auth-test/user-approve";
import { userRejected } from "../auth-test/user-rejected";
import { userDelete } from "../auth-test/user-delete";
import { userPending } from "../auth-test/user-pending";
import { userUpdate } from "../auth-test/user-update";
import { create } from "../todo-test/todo-create";
import { toDoDelete } from "../todo-test/todo-delete";
import { toDoGet } from "../todo-test/todo-get";
import { toDoGetAll } from "../todo-test/todo-getall";
import { updateComment } from "../todo-test/todo-updatecomment";
import { toDoUpdate } from "../todo-test/todo-update";
import { yesterday } from "../todo-test/todo-yesterday";

const MONGO_URI = "mongodb://localhost:27017/To-Do-Test";

beforeAll(async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("To check auth api's", () => {
  describe("signup", signUp);
  describe("verify", userVerify);
  describe("login", userLogin);
  describe("approve", userApprove);
  describe("rejected", userRejected);
  describe("delete", userDelete);
  describe("pending", userPending);
  describe("update", userUpdate);
});

describe("To check ToDo api", () => {
  describe("create", create);
  describe("delete", toDoDelete);
  describe("get", toDoGet);
  describe("getall", toDoGetAll);
  describe("comment", updateComment);
  describe("update", toDoUpdate);
  describe("yesterday task", yesterday);
});
