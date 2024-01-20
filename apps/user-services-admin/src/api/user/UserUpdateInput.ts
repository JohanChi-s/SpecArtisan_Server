import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string;
  firstName?: string | null;
  isActive?: boolean | null;
  isAdmin?: boolean;
  isViewer?: boolean | null;
  language?: string | null;
  lastName?: string | null;
  password?: string;
  profileId?: string;
  roles?: InputJsonValue;
  username?: string;
};
