import { myAxios } from "Api/constants";

export default class EmailService {
  constructor(private readonly axios = myAxios) {}
  async checkEmail(email: string) {
    try {
      const result = await this.axios.post("/email/check", {
        email,
      });
      if (result.status === 200) return result.data;
      return false;
    } catch (err) {
      console.log("Error while checking email:\n", err);
      return false;
    }
  }

  async confirmEmail(sessionId: string, code: number) {
    try {
      const result = await this.axios.post("/email/confirm", {
        sessionId,
        code,
      });
      if (result.status === 200) return true;
      return false;
    } catch (err) {
      console.log("Error while confirming email:\n", err);
      return false;
    }
  }
}