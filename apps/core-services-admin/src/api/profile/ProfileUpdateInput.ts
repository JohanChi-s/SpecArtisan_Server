import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  address?: string | null;
  age?: number | null;
  avatarUrl?: string | null;
  fullName?: string | null;
  user?: UserWhereUniqueInput;
};
