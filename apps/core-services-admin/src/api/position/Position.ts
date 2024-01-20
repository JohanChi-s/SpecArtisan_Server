import { Comment } from "../comment/Comment";

export type Position = {
  col: number;
  comments?: Comment | null;
  content: string | null;
  createdAt: Date;
  id: string;
  line: number;
  toCol: string | null;
  toLine: string | null;
  updatedAt: Date;
};
