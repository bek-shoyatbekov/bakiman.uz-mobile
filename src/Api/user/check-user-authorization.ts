import Storage from "Async-storage";
import IUser from "Interfaces/User/User";

export default async function checkUserAuthorization(): Promise<
  IUser | boolean
> {
  try {
    console.log("User authorization is being checked...");
    const result = await Storage.getItem("user");

    if (result !== null) {
      console.log("Getting user result", result);
      return JSON.parse(result) as IUser;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
}
