import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";
import { CommentListRelationFilter } from "./CommentListRelationFilter";

export type CommentWhereInput = {
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  parentComment?: CommentWhereUniqueInput;
  position?: PositionWhereUniqueInput;
  replies?: CommentListRelationFilter;
  status?: "Done" | "Todo" | "Doing";
  updatedAt?: DateTimeFilter;
  userId?: StringFilter;
};
