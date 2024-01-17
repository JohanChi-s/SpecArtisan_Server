import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";
import { WorkspaceUpdateManyWithoutTeamsInput } from "./WorkspaceUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  avatarUrl?: string | null;
  canComment?: boolean | null;
  canShare?: boolean | null;
  defaultUserRole?: string | null;
  inviteRequired?: boolean | null;
  name?: string | null;
  subDomain?: string | null;
  theme?: string | null;
  url?: string | null;
  users?: UserUpdateManyWithoutTeamsInput;
  workspaces?: WorkspaceUpdateManyWithoutTeamsInput;
};
