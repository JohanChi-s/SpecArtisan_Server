import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TeamUpdateManyWithoutUsersInput } from "./TeamUpdateManyWithoutUsersInput";
import { WorkspaceUpdateManyWithoutUsersInput } from "./WorkspaceUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string;
  firstName?: string | null;
  isActive?: boolean | null;
  isAdmin?: boolean;
  isViewer?: boolean | null;
  language?: string | null;
  lastName?: string | null;
  password?: string;
  profile?: ProfileWhereUniqueInput | null;
  roles?: InputJsonValue;
  teams?: TeamUpdateManyWithoutUsersInput;
  username?: string;
  workspaces?: WorkspaceUpdateManyWithoutUsersInput;
};
