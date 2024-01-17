import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WorkspaceWhereInput = {
  domain?: StringNullableFilter;
  id?: StringFilter;
  isPublic?: BooleanFilter;
  name?: StringFilter;
  teams?: TeamListRelationFilter;
  url?: StringNullableFilter;
  user?: UserListRelationFilter;
};
