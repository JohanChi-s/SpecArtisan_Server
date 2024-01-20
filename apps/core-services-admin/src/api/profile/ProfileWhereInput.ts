import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  address?: StringNullableFilter;
  age?: IntNullableFilter;
  avatarUrl?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
