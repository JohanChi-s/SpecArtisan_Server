import { ActionEvent } from "../actionEvent/ActionEvent";
import { Archived } from "../archived/Archived";
import { JsonValue } from "type-fest";
import { Member } from "../member/Member";

export type Collection = {
  actionEvents?: Array<ActionEvent>;
  archiveds?: Array<Archived>;
  authorId: string;
  canShare: boolean | null;
  childCollectionIds: string | null;
  createdAt: Date;
  description: string | null;
  downloadPermission: JsonValue;
  icon: string | null;
  id: string;
  index: string | null;
  isSaving: boolean | null;
  members?: Array<Member>;
  name: string;
  parentCollectionId: string | null;
  updatedAt: Date;
  url: string | null;
  workspaceId: string | null;
};
