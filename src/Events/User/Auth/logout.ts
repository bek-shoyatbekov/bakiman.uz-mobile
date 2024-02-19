import { UserEvents } from "..";

export const logout = (userId: string) => {
  UserEvents.emit("logout", { userId });
};

export const onLogout = (callback: (userId: string) => void) => {
  UserEvents.on("logout", callback);
};
