import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";
import { Team } from "../team/Team";
import { Workspace } from "../workspace/Workspace";

export type User = {
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  isAdmin: boolean;
  isViewer: boolean | null;
  language: string | null;
  lastActiveAt: Date | null;
  lastName: string | null;
  password: string;
  profile?: Profile | null;
  profileId: string;
  roles: JsonValue;
  teams?: Array<Team>;
  updatedAt: Date;
  username: string;
  workspaces?: Array<Workspace>;
};
