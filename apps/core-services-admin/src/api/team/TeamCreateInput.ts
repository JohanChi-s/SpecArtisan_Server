import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";
import { WorkspaceCreateNestedManyWithoutTeamsInput } from "./WorkspaceCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  avatarUrl?: string | null;
  canComment?: boolean | null;
  canShare?: boolean | null;
  defaultUserRole?: string | null;
  inviteRequired?: boolean | null;
  name?: string | null;
  subDomain?: string | null;
  theme?: string | null;
  url?: string | null;
  users?: UserCreateNestedManyWithoutTeamsInput;
  workspaces?: WorkspaceCreateNestedManyWithoutTeamsInput;
};
