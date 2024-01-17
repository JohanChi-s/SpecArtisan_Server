import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { WorkspaceListRelationFilter } from "../workspace/WorkspaceListRelationFilter";

export type TeamWhereInput = {
  avatarUrl?: StringNullableFilter;
  canComment?: BooleanNullableFilter;
  canShare?: BooleanNullableFilter;
  defaultUserRole?: StringNullableFilter;
  id?: StringFilter;
  inviteRequired?: BooleanNullableFilter;
  name?: StringNullableFilter;
  subDomain?: StringNullableFilter;
  theme?: StringNullableFilter;
  url?: StringNullableFilter;
  users?: UserListRelationFilter;
  workspaces?: WorkspaceListRelationFilter;
};
