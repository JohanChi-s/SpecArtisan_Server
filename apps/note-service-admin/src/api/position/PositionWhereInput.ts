import { IntFilter } from "../../util/IntFilter";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PositionWhereInput = {
  col?: IntFilter;
  comments?: CommentWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  line?: IntFilter;
  toCol?: StringNullableFilter;
  toLine?: StringNullableFilter;
};
