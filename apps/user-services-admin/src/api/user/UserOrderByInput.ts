import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isAdmin?: SortOrder;
  isViewer?: SortOrder;
  language?: SortOrder;
  lastActiveAt?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  profileId?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
