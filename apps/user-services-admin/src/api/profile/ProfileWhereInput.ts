import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  address?: StringNullableFilter;
  age?: IntNullableFilter;
  avatarUrl?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  userId?: StringFilter;
};
