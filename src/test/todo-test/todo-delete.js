import request from "supertest";
import app from "../../server.js";

export const toDoDelete = () => {
  test("DELETE delete api", async () => {
    const response = await request(app).delete("/api/v1/todo/delete/6410561603b3c18bc4bbd5a0")
    // console.log(response.body);
    // console.log(response.body.data);

    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("toDo deleted successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};