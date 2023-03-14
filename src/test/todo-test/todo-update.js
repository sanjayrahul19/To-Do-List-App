import request from "supertest";
import app from "../../server.js";

export const toDoUpdate = () => {
  test("PATCH update api", async () => {
    const response = await request(app)
      .patch("/api/v1/todo/update/6410567ff28561cb9681bc03")
      .send({
        toDo: "to finish jest",
        description: "easy",
        comment: "going to finish",
      });

    // console.log(response.body);
    // console.log(response.body.data);

    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("toDo updated successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};
