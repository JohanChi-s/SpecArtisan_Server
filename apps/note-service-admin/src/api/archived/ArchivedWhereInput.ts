import { CollectionListRelationFilter } from "../collection/CollectionListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArchivedWhereInput = {
  collections?: CollectionListRelationFilter;
  createdAt?: DateTimeFilter;
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  userId?: StringFilter;
};
