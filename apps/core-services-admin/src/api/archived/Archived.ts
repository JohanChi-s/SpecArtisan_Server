import { Collection } from "../collection/Collection";
import { Document } from "../document/Document";

export type Archived = {
  collections?: Array<Collection>;
  createdAt: Date;
  documents?: Array<Document>;
  id: string;
  updatedAt: Date;
  userId: string;
};
