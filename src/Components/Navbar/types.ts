export type NavigationParamList = {
  [key: string]: INavbarOptions | undefined;
};

export interface INavbarOptions {
  userId?: string;
  username?: string;
  avatar?: string;
  isOwner?: boolean;
  gameId?: string;
}

export type IsLoggedType = {
  isLogged: boolean;
};
