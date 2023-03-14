import request from "supertest";
import app from "../../server";

export const userApprove = () => {
  test("PATCH approve api", async () => {
    const response = await request(app).patch(
      "/api/v1/user/approved/64102daf1327e8b0240ff96e"
    );
    // console.log(response.body);
    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Approved");
      expect(response.body.status).toBeTruthy();
    }
  });
};
