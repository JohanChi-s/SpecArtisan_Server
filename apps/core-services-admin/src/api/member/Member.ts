import { Collection } from "../collection/Collection";
import { Document } from "../document/Document";
import { JsonValue } from "type-fest";

export type Member = {
  collection?: Collection | null;
  createdAt: Date;
  document?: Array<Document>;
  id: string;
  role: JsonValue;
  updatedAt: Date;
  userId: string | null;
};
