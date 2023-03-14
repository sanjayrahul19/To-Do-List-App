import request from "supertest";
import app from "../../server.js";

export const yesterday = () => {
  test("GET yesterday task api", async () => {
    const response = await request(app).get("/api/v1/todo/yesterdaytask");
    // console.log(response.body);
    // console.log(response.body.data);

    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Yesterday Task sent successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};
