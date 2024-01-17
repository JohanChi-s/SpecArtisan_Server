import { Team } from "../team/Team";
import { User } from "../user/User";

export type Workspace = {
  createdAt: Date;
  domain: string | null;
  id: string;
  isPublic: boolean;
  name: string;
  teams?: Array<Team>;
  updatedAt: Date;
  url: string | null;
  user?: Array<User>;
};
