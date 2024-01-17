import { TeamUpdateManyWithoutWorkspacesInput } from "./TeamUpdateManyWithoutWorkspacesInput";
import { UserUpdateManyWithoutWorkspacesInput } from "./UserUpdateManyWithoutWorkspacesInput";

export type WorkspaceUpdateInput = {
  domain?: string | null;
  isPublic?: boolean;
  name?: string;
  teams?: TeamUpdateManyWithoutWorkspacesInput;
  url?: string | null;
  user?: UserUpdateManyWithoutWorkspacesInput;
};
