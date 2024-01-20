import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ActionEventWhereInput = {
  action?:
    | "Download"
    | "Upload"
    | "Edit"
    | "Delete"
    | "AddRole"
    | "RemoveRole"
    | "Duplicate"
    | "Comment"
    | "Share"
    | "Assign"
    | "Star"
    | "Public"
    | "Private";
  actor?: StringNullableFilter;
  assignee?: StringNullableFilter;
  assigner?: StringNullableFilter;
  collection?: CollectionWhereUniqueInput;
  createdAt?: DateTimeFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
};
