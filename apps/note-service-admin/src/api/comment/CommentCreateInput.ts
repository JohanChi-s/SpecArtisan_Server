import { CommentCreateNestedManyWithoutCommentsInput } from "./CommentCreateNestedManyWithoutCommentsInput";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type CommentCreateInput = {
  comments?: CommentCreateNestedManyWithoutCommentsInput;
  content: string;
  document?: DocumentWhereUniqueInput | null;
  parentCommentId?: CommentWhereUniqueInput | null;
  position?: PositionWhereUniqueInput | null;
  status?: "Done" | "Todo" | "Doing" | null;
  userId: string;
};
