import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  authorId?: SortOrder;
  collectionId?: SortOrder;
  createdAt?: SortOrder;
  emoji?: SortOrder;
  id?: SortOrder;
  isFullWidth?: SortOrder;
  isPublic?: SortOrder;
  publishedAt?: SortOrder;
  revision?: SortOrder;
  templateId?: SortOrder;
  text?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
