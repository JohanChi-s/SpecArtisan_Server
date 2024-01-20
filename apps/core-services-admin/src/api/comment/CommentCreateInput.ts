import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";
import { CommentCreateNestedManyWithoutCommentsInput } from "./CommentCreateNestedManyWithoutCommentsInput";

export type CommentCreateInput = {
  content: string;
  document?: DocumentWhereUniqueInput | null;
  parentComment?: CommentWhereUniqueInput | null;
  position?: PositionWhereUniqueInput | null;
  replies?: CommentCreateNestedManyWithoutCommentsInput;
  status?: "Done" | "Todo" | "Doing" | null;
  userId: string;
};
