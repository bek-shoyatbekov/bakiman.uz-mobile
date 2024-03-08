import User from "../../Interfaces/User/User";

export async function createSignupForm(user: User) {
  try {
    console.log("Creating signup form", user);
    const formData = new FormData();

    const avatarUri = user.avatar.startsWith("file://")
      ? `${user.avatar}`
      : `file://${user.avatar}`;
    const avatarBlob = await fetch(avatarUri).then((res) => res.blob());
    const avatarFile = new File([avatarBlob], "avatar.jpg", {
      type: "image/jpeg",
    });

    formData.append("avatar", avatarFile);
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);

    console.log("Signup form is created", formData);

    return formData;
  } catch (err) {
    console.log("Error while creating signup form : ", JSON.stringify(err));
  }
}
