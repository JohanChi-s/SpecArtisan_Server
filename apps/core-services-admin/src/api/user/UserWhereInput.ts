import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { WorkspaceListRelationFilter } from "../workspace/WorkspaceListRelationFilter";

export type UserWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isAdmin?: BooleanFilter;
  isViewer?: BooleanNullableFilter;
  language?: StringNullableFilter;
  lastActiveAt?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  profile?: ProfileWhereUniqueInput;
  teams?: TeamListRelationFilter;
  updatedAt?: DateTimeFilter;
  username?: StringFilter;
  workspaces?: WorkspaceListRelationFilter;
};
