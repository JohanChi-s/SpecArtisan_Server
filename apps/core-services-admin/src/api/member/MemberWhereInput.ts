import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MemberWhereInput = {
  collection?: CollectionWhereUniqueInput;
  createdAt?: DateTimeFilter;
  document?: DocumentListRelationFilter;
  id?: StringFilter;
  role?: JsonFilter;
  updatedAt?: DateTimeFilter;
  userId?: StringNullableFilter;
};
