import { User } from "../user/User";

export type Profile = {
  address: string | null;
  age: number | null;
  avatarUrl: string | null;
  createdAt: Date;
  fullName: string | null;
  id: string;
  updatedAt: Date;
  user?: User;
};
