import request from "supertest";
import app from "../../server";

export const userUpdate = () => {
  test("PATCH update api", async () => {
    const response = await request(app)
      .patch("/api/v1/user/update/64102daf1327e8b0240ff96e")
      .send({
        name: "sanjayrahul",
      });
    // console.log(response.body);
    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("User details updated successfully");
      expect(response.body.status).toBeTruthy();
    }
  });
};
