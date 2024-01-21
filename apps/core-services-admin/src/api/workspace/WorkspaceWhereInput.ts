import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WorkspaceWhereInput = {
  createdAt?: DateTimeFilter;
  domain?: StringNullableFilter;
  id?: StringFilter;
  isPublic?: BooleanFilter;
  name?: StringFilter;
  teams?: TeamListRelationFilter;
  updatedAt?: DateTimeFilter;
  url?: StringNullableFilter;
  user?: UserListRelationFilter;
};
