import { User } from "../models/User";
import instance from "./Config";

export const signin = (user: User): Promise<User> => {
  const url = `/signin`;
  return instance.post(url, user);
};

export const signup = (user: User): Promise<User> => {
  const url = `/signup`;
  return instance.post(url, user);
};

export const forgetPassword = (email: string): Promise<User> => {
  const url = `/forget-password`;
  return instance.post(url, { email });
};
