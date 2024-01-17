import { ActionEventUpdateManyWithoutDocumentsInput } from "./ActionEventUpdateManyWithoutDocumentsInput";
import { ArchivedUpdateManyWithoutDocumentsInput } from "./ArchivedUpdateManyWithoutDocumentsInput";
import { DocumentUpdateManyWithoutDocumentsInput } from "./DocumentUpdateManyWithoutDocumentsInput";
import { CommentUpdateManyWithoutDocumentsInput } from "./CommentUpdateManyWithoutDocumentsInput";
import { MemberUpdateManyWithoutDocumentsInput } from "./MemberUpdateManyWithoutDocumentsInput";

export type DocumentUpdateInput = {
  actionEvents?: ActionEventUpdateManyWithoutDocumentsInput;
  archiveds?: ArchivedUpdateManyWithoutDocumentsInput;
  authorId?: string;
  childDocuments?: DocumentUpdateManyWithoutDocumentsInput;
  collectionId?: string | null;
  comments?: CommentUpdateManyWithoutDocumentsInput;
  documents?: DocumentUpdateManyWithoutDocumentsInput;
  emoji?: string | null;
  isFullWidth?: boolean | null;
  isPublic?: boolean;
  members?: MemberUpdateManyWithoutDocumentsInput;
  revision?: number | null;
  templateId?: string | null;
  text?: string | null;
  title?: string;
};
