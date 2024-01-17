import { ActionEventUpdateManyWithoutCollectionsInput } from "./ActionEventUpdateManyWithoutCollectionsInput";
import { ArchivedUpdateManyWithoutCollectionsInput } from "./ArchivedUpdateManyWithoutCollectionsInput";
import { InputJsonValue } from "../../types";
import { MemberUpdateManyWithoutCollectionsInput } from "./MemberUpdateManyWithoutCollectionsInput";

export type CollectionUpdateInput = {
  actionEvents?: ActionEventUpdateManyWithoutCollectionsInput;
  archiveds?: ArchivedUpdateManyWithoutCollectionsInput;
  authorId?: string;
  canShare?: boolean | null;
  childCollectionIds?: string | null;
  description?: string | null;
  downloadPermission?: InputJsonValue;
  icon?: string | null;
  index?: string | null;
  isSaving?: boolean | null;
  members?: MemberUpdateManyWithoutCollectionsInput;
  name?: string;
  parentCollectionId?: string | null;
  url?: string | null;
  workspaceId?: string | null;
};
