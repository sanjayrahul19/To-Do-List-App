import request from "supertest";
import app from "../../server.js";

export const create = () => {
  test("POST create api", async () => {
    const response = await request(app).post("/api/v1/todo/create").send({
      // user: "64102daf1327e8b0240ff96e",
      // toDo: "To finish api",
      // description: "work on time",
      // comment: "easy task",
    });
    // console.log(response.body);
    // console.log(response.body.data);

    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("toDo created successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};
