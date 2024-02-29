import Storage from "Async-storage";
import User from "Interfaces/User/User";

export default async function cacheUser(user: User) {
  try {
    await Storage.setItem("user", JSON.stringify(user));
    return true;
  } catch (err) {
    return false;
  }
}
