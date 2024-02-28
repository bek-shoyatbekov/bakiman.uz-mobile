import { myAxios } from "Api/constants";
import User from "Interfaces/User/User";

export default class UserService {
  constructor(private readonly axios = myAxios) {}
  async signup(user: User) {}
  async updateProfile(userId: string, user: Partial<User>) {}
  async deleteProfile(userId: string) {}
}
