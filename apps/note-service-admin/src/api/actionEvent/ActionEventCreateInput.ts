import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type ActionEventCreateInput = {
  action:
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
  actor?: string | null;
  assignee?: string | null;
  assigner?: string | null;
  collectionId?: CollectionWhereUniqueInput | null;
  documentId?: DocumentWhereUniqueInput | null;
};
