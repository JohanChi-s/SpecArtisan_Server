import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { WorkspaceListRelationFilter } from "../workspace/WorkspaceListRelationFilter";

export type UserWhereInput = {
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
  profileId?: StringFilter;
  teams?: TeamListRelationFilter;
  username?: StringFilter;
  workspaces?: WorkspaceListRelationFilter;
};
