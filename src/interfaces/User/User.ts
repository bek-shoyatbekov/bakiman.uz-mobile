/** @format */

export default interface IUser {
  email: string;
  username: string;
  avatar: string;
  badges?: string[];
  score?: number;
  online?: boolean;
  playing?: boolean;
}
