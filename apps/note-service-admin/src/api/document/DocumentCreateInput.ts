import { ActionEventCreateNestedManyWithoutDocumentsInput } from "./ActionEventCreateNestedManyWithoutDocumentsInput";
import { ArchivedCreateNestedManyWithoutDocumentsInput } from "./ArchivedCreateNestedManyWithoutDocumentsInput";
import { DocumentCreateNestedManyWithoutDocumentsInput } from "./DocumentCreateNestedManyWithoutDocumentsInput";
import { CommentCreateNestedManyWithoutDocumentsInput } from "./CommentCreateNestedManyWithoutDocumentsInput";
import { MemberCreateNestedManyWithoutDocumentsInput } from "./MemberCreateNestedManyWithoutDocumentsInput";

export type DocumentCreateInput = {
  actionEvents?: ActionEventCreateNestedManyWithoutDocumentsInput;
  archiveds?: ArchivedCreateNestedManyWithoutDocumentsInput;
  authorId: string;
  childDocuments?: DocumentCreateNestedManyWithoutDocumentsInput;
  collectionId?: string | null;
  comments?: CommentCreateNestedManyWithoutDocumentsInput;
  documents?: DocumentCreateNestedManyWithoutDocumentsInput;
  emoji?: string | null;
  isFullWidth?: boolean | null;
  isPublic: boolean;
  members?: MemberCreateNestedManyWithoutDocumentsInput;
  revision?: number | null;
  templateId?: string | null;
  text?: string | null;
  title: string;
};
