import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
