import request from "supertest";
import app from "../../server";

export const userVerify = () => {
  test("PATCH verify api", async () => {
    const headers = {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTAyZGFmMTMyN2U4YjAyNDBmZjk2ZSIsImlhdCI6MTY3ODc4MTg3MSwiZXhwIjoxNjc4ODY4MjcxfQ.lMOyNDsrPs9OFvjY2XiAf04Dzvnc2qrh-W7zwS0lr7w",
    };
    const response = await request(app)
      .patch("/api/v1/user/verify")
      .set(headers)
      .send({
        otp: 2601,
      });
    // console.log(response.body);
    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Approve status pending");
      expect(response.body.status).toBeTruthy();
    } else if (response.statusCode === 500) {
      expect(response.statusCode).toBe(500);
      expect(response.body.message).toBe("Access Denied");
    } else if (response.body.message === "User Already Verified") {
      expect(response.statusCode).toBe(400);
      expect(response.body.status).toBeFalsy();
    } else if (response.statusCode === 401) {
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("Incorrect OTP");
      expect(response.body.status).toBeFalsy();
    }
  });
};
