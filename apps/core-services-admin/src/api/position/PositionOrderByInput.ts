import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  col?: SortOrder;
  commentsId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  line?: SortOrder;
  toCol?: SortOrder;
  toLine?: SortOrder;
  updatedAt?: SortOrder;
};
