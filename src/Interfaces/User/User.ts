/** @format */

export default interface IUser {
  id: string;
  email?: string;
  username: string;
  avatar: string;
  badges?: string[];
  score?: number;
  online?: boolean;
  playing?: boolean;
}
