import { SortOrder } from "../../util/SortOrder";

export type ActionEventOrderByInput = {
  action?: SortOrder;
  actor?: SortOrder;
  assignee?: SortOrder;
  assigner?: SortOrder;
  collectionId?: SortOrder;
  createdAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
};
