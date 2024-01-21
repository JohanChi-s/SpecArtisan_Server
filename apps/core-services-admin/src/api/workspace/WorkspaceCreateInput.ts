import { TeamCreateNestedManyWithoutWorkspacesInput } from "./TeamCreateNestedManyWithoutWorkspacesInput";
import { UserCreateNestedManyWithoutWorkspacesInput } from "./UserCreateNestedManyWithoutWorkspacesInput";

export type WorkspaceCreateInput = {
  domain?: string | null;
  isPublic: boolean;
  name: string;
  teams?: TeamCreateNestedManyWithoutWorkspacesInput;
  url?: string | null;
  user?: UserCreateNestedManyWithoutWorkspacesInput;
};
