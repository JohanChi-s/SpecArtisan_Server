import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

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
  workspaceId?: StringNullableFilter;
};
