import { ActionEventCreateNestedManyWithoutCollectionsInput } from "./ActionEventCreateNestedManyWithoutCollectionsInput";
import { ArchivedCreateNestedManyWithoutCollectionsInput } from "./ArchivedCreateNestedManyWithoutCollectionsInput";
import { InputJsonValue } from "../../types";
import { MemberCreateNestedManyWithoutCollectionsInput } from "./MemberCreateNestedManyWithoutCollectionsInput";

export type CollectionCreateInput = {
  actionEvents?: ActionEventCreateNestedManyWithoutCollectionsInput;
  archiveds?: ArchivedCreateNestedManyWithoutCollectionsInput;
  authorId: string;
  canShare?: boolean | null;
  childCollectionIds?: string | null;
  description?: string | null;
  downloadPermission?: InputJsonValue;
  icon?: string | null;
  index?: string | null;
  isSaving?: boolean | null;
  members?: MemberCreateNestedManyWithoutCollectionsInput;
  name: string;
  parentCollectionId?: string | null;
  url?: string | null;
  workspaceId?: string | null;
};
