import { JsonValue } from "type-fest";

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
  profileId: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
