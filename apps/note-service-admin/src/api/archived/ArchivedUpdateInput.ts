import { CollectionUpdateManyWithoutArchivedsInput } from "./CollectionUpdateManyWithoutArchivedsInput";
import { DocumentUpdateManyWithoutArchivedsInput } from "./DocumentUpdateManyWithoutArchivedsInput";

export type ArchivedUpdateInput = {
  collections?: CollectionUpdateManyWithoutArchivedsInput;
  documents?: DocumentUpdateManyWithoutArchivedsInput;
  userId?: string;
};
