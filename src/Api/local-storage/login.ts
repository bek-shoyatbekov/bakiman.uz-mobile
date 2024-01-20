import Storage from "Async-storage";
import IUser from "Interfaces/User/User";

export default async function login(user: IUser) {
  try {
    await Storage.setItem("user", JSON.stringify(user));
    return true;
  } catch (err) {
    return false;
  }
}
