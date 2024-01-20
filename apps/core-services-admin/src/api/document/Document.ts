import { ActionEvent } from "../actionEvent/ActionEvent";
import { Archived } from "../archived/Archived";
import { Comment } from "../comment/Comment";
import { Member } from "../member/Member";

export type Document = {
  actionEvents?: Array<ActionEvent>;
  archiveds?: Array<Archived>;
  authorId: string;
  childDocuments?: Array<Document>;
  collectionId: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  documents?: Array<Document>;
  emoji: string | null;
  id: string;
  isFullWidth: boolean | null;
  isPublic: boolean;
  members?: Array<Member>;
  publishedAt: Date | null;
  revision: number | null;
  templateId: string | null;
  text: string | null;
  title: string;
  updatedAt: Date;
};
