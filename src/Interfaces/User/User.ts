/** @format */

export default interface User {
  id?: string;
  email?: string;
  username: string;
  password?: string;
  avatar: string;
  badges?: string[];
  score?: number;
  online?: boolean;
  playing?: boolean;
}
