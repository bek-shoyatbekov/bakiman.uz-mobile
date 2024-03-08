import { myAxios } from "Api/constants";
import User from "Interfaces/User/User";

export default class UserService {
  constructor(private readonly axios = myAxios) {}
  async signup(userSignupData: FormData) {
    try {
      const result = await this.axios.post("/users/signup", userSignupData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (result.status === 201) {
        console.log("User created successfully");
        return result.data; // Return created user data if successful
      }

      return false;
    } catch (err) {
      console.log(
        "Error while creating user:",
        JSON.stringify((err as any)?.response)
      );
      return false;
    }
  }
  async updateProfile(userId: string, user: Partial<User>) {
    try {
      const result = await this.axios.put(`/users/update/${userId}`, user);
      if (result.status === 200) {
        return result.data; // Return updated user data if successful
      } else {
        console.warn(`Failed to update profile: ${result.statusText}`);
        return false;
      }
    } catch (err) {
      console.error(`Error updating profile:`, err);
      return false;
    }
  }
  async deleteProfile(userId: string) {
    try {
      const result = await this.axios.delete(`/users/${userId}`);
      if (result.status === 200) {
        return true; // Profile deleted successfully
      } else {
        console.warn(`Failed to delete profile: ${result.statusText}`);
        return false;
      }
    } catch (err) {
      console.error(`Error deleting profile:`, err);
      return false;
    }
  }
}
