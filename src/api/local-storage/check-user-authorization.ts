import Storage from "async-storage";

export default async function checkUserAuthorization() {
  try {
    const result = await Storage.getItem("user");

    if (result !== null) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
}
