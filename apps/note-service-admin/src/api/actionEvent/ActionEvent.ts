import { Collection } from "../collection/Collection";
import { Document } from "../document/Document";

export type ActionEvent = {
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
  actor: string | null;
  assignee: string | null;
  assigner: string | null;
  collectionId?: Collection | null;
  createdAt: Date;
  documentId?: Document | null;
  id: string;
};
