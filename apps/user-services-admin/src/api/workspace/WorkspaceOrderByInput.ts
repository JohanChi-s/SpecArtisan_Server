import { SortOrder } from "../../util/SortOrder";

export type WorkspaceOrderByInput = {
  createdAt?: SortOrder;
  domain?: SortOrder;
  id?: SortOrder;
  isPublic?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
