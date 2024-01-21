import { ActionEventListRelationFilter } from "../actionEvent/ActionEventListRelationFilter";
import { ArchivedListRelationFilter } from "../archived/ArchivedListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MemberListRelationFilter } from "../member/MemberListRelationFilter";

export type CollectionWhereInput = {
  actionEvents?: ActionEventListRelationFilter;
  archiveds?: ArchivedListRelationFilter;
  authorId?: StringFilter;
  canShare?: BooleanNullableFilter;
  childCollectionIds?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  downloadPermission?: JsonFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  index?: StringNullableFilter;
  isSaving?: BooleanNullableFilter;
  members?: MemberListRelationFilter;
  name?: StringFilter;
  parentCollectionId?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  url?: StringNullableFilter;
  workspaceId?: StringNullableFilter;
};
