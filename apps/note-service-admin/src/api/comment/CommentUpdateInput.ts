import { CommentUpdateManyWithoutCommentsInput } from "./CommentUpdateManyWithoutCommentsInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type CommentUpdateInput = {
  comments?: CommentUpdateManyWithoutCommentsInput;
  content?: string;
  document?: DocumentWhereUniqueInput | null;
  parentCommentId?: CommentWhereUniqueInput | null;
  position?: PositionWhereUniqueInput | null;
  status?: "Done" | "Todo" | "Doing" | null;
  userId?: string;
};
