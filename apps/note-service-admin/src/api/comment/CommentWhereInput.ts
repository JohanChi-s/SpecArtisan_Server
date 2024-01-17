import { CommentListRelationFilter } from "./CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type CommentWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  parentCommentId?: CommentWhereUniqueInput;
  position?: PositionWhereUniqueInput;
  status?: "Done" | "Todo" | "Doing";
  updatedAt?: DateTimeFilter;
  userId?: StringFilter;
};
