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
  collection?: Collection | null;
  createdAt: Date;
  document?: Document | null;
  id: string;
};
