export type NavigationParamList = {
  [key: string]: INavbarOptions | undefined;
};

export interface INavbarOptions {
  userId: string;
  isOwner: boolean;
}
