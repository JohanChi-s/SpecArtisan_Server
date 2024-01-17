import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  collectionId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
