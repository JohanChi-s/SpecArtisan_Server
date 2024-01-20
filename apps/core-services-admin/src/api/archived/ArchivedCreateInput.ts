import { CollectionCreateNestedManyWithoutArchivedsInput } from "./CollectionCreateNestedManyWithoutArchivedsInput";
import { DocumentCreateNestedManyWithoutArchivedsInput } from "./DocumentCreateNestedManyWithoutArchivedsInput";

export type ArchivedCreateInput = {
  collections?: CollectionCreateNestedManyWithoutArchivedsInput;
  documents?: DocumentCreateNestedManyWithoutArchivedsInput;
  userId: string;
};
