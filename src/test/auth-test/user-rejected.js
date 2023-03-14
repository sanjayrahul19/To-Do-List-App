import request from "supertest";
import app from "../../server";

export const userRejected = () => {
  test("PATCH approve api", async () => {
    const response = await request(app).patch(
      "/api/v1/user/reject/641014933e8f7ac1fbeec0bd"
    );
    // console.log(response.body);
    if (response.body.message === "User Banned") {
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toBeTruthy();
    } else if (response.body.message === "User is Permanently Banned") {
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toBeTruthy();
    } else if (response.body.message === "User Already banned") {
      expect(response.statusCode).toBe(500);
      expect(response.body.status).toBeFalsy();
    }
  });
};
