import Storage from "async-storage";
import IUser from "interfaces/User/User";

export default async function login(user: IUser) {
  try {
    await Storage.setItem("user", JSON.stringify(user));
    return true;
  } catch (err) {
    return false;
  }
}
