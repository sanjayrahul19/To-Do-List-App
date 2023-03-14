import request from "supertest";
import app from "../../server.js";

export const toDoGet = () => {
  test("GET get api", async () => {
    const response = await request(app).get(
      "/api/v1/todo/get/6410567ff28561cb9681bc03"
    );
    // console.log(response.body);
    // console.log(response.body.data);

    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("toDo sent successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};
