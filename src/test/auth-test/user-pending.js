import request from "supertest";
import app from "../../server";


export const userPending = () => {
    test("GET approve api", async () => {
      const response = await request(app).get(
        "/api/v1/user/pending-users"
      );
      // console.log(response.body);
      if (response.statusCode === 200) {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe( "Approve pending users sent successfully",);
        expect(response.body.status).toBeTruthy();
      }
    });
  };
  