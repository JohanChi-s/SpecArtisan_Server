import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";
import { WorkspaceCreateNestedManyWithoutUsersInput } from "./WorkspaceCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  isActive?: boolean | null;
  isAdmin: boolean;
  isViewer?: boolean | null;
  language?: string | null;
  lastName?: string | null;
  password: string;
  profile?: ProfileWhereUniqueInput | null;
  roles: InputJsonValue;
  teams?: TeamCreateNestedManyWithoutUsersInput;
  username: string;
  workspaces?: WorkspaceCreateNestedManyWithoutUsersInput;
};
