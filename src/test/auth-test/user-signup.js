import request from "supertest";
import app from "../../server.js";

export const signUp = () => {
  test("POST signup api", async () => {
    const response = await request(app).post("/api/v1/user/signup").send({
      name: "abc",
      email: "abc@gmail.com",
      password: "Sanjay",
      confirmPassword: "Sanjay",
      role: "admin",
    });
    // console.log(response.body);
    // console.log(response.body.data);

    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Mail sent successfully");
      expect(response.body.status).toBeTruthy();
    } else if (response.statusCode === 400) {
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe("User already exists");
      expect(response.body.status).toBeFalsy();
    } else {
      expect(response.body.status).toBeFalsy();
    }
  });
};
