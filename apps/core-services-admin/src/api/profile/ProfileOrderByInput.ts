import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  address?: SortOrder;
  age?: SortOrder;
  avatarUrl?: SortOrder;
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
