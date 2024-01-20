import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";

export type PositionUpdateInput = {
  col?: number;
  comments?: CommentWhereUniqueInput | null;
  content?: string | null;
  line?: number;
  toCol?: string | null;
  toLine?: string | null;
};
