import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  avatarUrl?: SortOrder;
  canComment?: SortOrder;
  canShare?: SortOrder;
  createdAt?: SortOrder;
  defaultUserRole?: SortOrder;
  id?: SortOrder;
  inviteRequired?: SortOrder;
  name?: SortOrder;
  subDomain?: SortOrder;
  theme?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  workspaceId?: SortOrder;
};
