import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type WorkspaceWhereInput = {
  domain?: StringNullableFilter;
  id?: StringFilter;
  isPublic?: BooleanNullableFilter;
  name?: StringFilter;
  url?: StringNullableFilter;
};
