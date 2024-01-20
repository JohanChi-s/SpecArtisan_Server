import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";
import { CommentUpdateManyWithoutCommentsInput } from "./CommentUpdateManyWithoutCommentsInput";

export type CommentUpdateInput = {
  content?: string;
  document?: DocumentWhereUniqueInput | null;
  parentComment?: CommentWhereUniqueInput | null;
  position?: PositionWhereUniqueInput | null;
  replies?: CommentUpdateManyWithoutCommentsInput;
  status?: "Done" | "Todo" | "Doing" | null;
  userId?: string;
};
