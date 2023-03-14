import request from "supertest";
import app from "../../server";

export const userLogin = () => {
  test("GET login api", async () => {
    const response = await request(app).get("/api/v1/user/login").send({
      email: "abc@gmail.com",
      password: "Sanjay",
    });
    // console.log(response.body);
    if (response.statusCode === 404) {
      expect(response.statusCode).toBe(404);
      expect(response.body.message).toBe("User not found");
      expect(response.body.status).toBeFalsy();
    } else if (response.body.message === "Incorrect password") {
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("Incorrect password");
      expect(response.body.status).toBeFalsy();
    } else if (response.body.message === "User not Verified") {
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("User not Verified");
      expect(response.body.status).toBeFalsy();
    } else if (response.body.message === "Banned") {
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("Banned");
      expect(response.body.status).toBeFalsy();
    } else if (response.body.message === "Pending") {
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("Pending");
      expect(response.body.status).toBeFalsy();
    } else if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("LoggedIn Successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};
