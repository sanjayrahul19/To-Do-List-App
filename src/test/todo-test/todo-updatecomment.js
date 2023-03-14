import request from "supertest";
import app from "../../server.js";

export const updateComment = () => {
  test("PATCH update comment api", async () => {
    const response = await request(app)
      .patch("/api/v1/todo/update/comment/6410567ff28561cb9681bc03")
      .send({
        comment: "tough task",
      });
    // console.log(response.body);
    // console.log(response.body.data);

    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("comment updated successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};
