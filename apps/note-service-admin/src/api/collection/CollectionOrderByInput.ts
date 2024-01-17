import { SortOrder } from "../../util/SortOrder";

export type CollectionOrderByInput = {
  authorId?: SortOrder;
  canShare?: SortOrder;
  childCollectionIds?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  downloadPermission?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  index?: SortOrder;
  isSaving?: SortOrder;
  name?: SortOrder;
  parentCollectionId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  workspaceId?: SortOrder;
};
