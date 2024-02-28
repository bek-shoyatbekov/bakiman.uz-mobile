import Storage from "Async-storage";
import User from "Interfaces/User/User";

export default async function checkUserAuthorization(): Promise<
  User | boolean
> {
  try {
    console.log("User authorization is being checked...");
    const result = await Storage.getItem("user");

    if (result !== null) {
      console.log("Getting user result", result);
      return JSON.parse(result) as User;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
}
