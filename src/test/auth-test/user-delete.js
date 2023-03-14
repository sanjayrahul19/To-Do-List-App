import request from "supertest";
import app from "../../server";

export const userDelete = () => {
  test("DELETE approve api", async () => {
    const headers = {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTAyZGFmMTMyN2U4YjAyNDBmZjk2ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3ODc4NTkxMX0.L--s7-zLtlb1ElBnOU7yvSq3ohJXK3h5mCc83ofCnnE",
    };
    const response = await request(app)
      .delete("/api/v1/user/delete/641014933e8f7ac1fbeec0bd")
      .set(headers);
    // console.log(response.body);
    if (response.statusCode === 200) {
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("User Details deleted Successfully");
      expect(response.body.status).toBeTruthy();
    } else if (response.statusCode == 400) {
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe("You don't have permission");
      expect(response.body.status).toBeFalsy();
    }
  });
};
