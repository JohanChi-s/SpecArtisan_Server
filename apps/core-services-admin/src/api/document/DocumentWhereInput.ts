import { ActionEventListRelationFilter } from "../actionEvent/ActionEventListRelationFilter";
import { ArchivedListRelationFilter } from "../archived/ArchivedListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DocumentListRelationFilter } from "./DocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { MemberListRelationFilter } from "../member/MemberListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DocumentWhereInput = {
  actionEvents?: ActionEventListRelationFilter;
  archiveds?: ArchivedListRelationFilter;
  authorId?: StringFilter;
  childDocuments?: DocumentListRelationFilter;
  collectionId?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  createdAt?: DateTimeFilter;
  documents?: DocumentListRelationFilter;
  emoji?: StringNullableFilter;
  id?: StringFilter;
  isFullWidth?: BooleanNullableFilter;
  isPublic?: BooleanFilter;
  members?: MemberListRelationFilter;
  publishedAt?: DateTimeNullableFilter;
  revision?: IntNullableFilter;
  templateId?: StringNullableFilter;
  text?: StringNullableFilter;
  title?: StringFilter;
  updatedAt?: DateTimeFilter;
};
