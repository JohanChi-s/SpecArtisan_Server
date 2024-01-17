import { Document } from "../document/Document";
import { Position } from "../position/Position";

export type Comment = {
  comments?: Array<Comment>;
  content: string;
  createdAt: Date;
  document?: Document | null;
  id: string;
  parentCommentId?: Comment | null;
  position?: Position | null;
  status?: "Done" | "Todo" | "Doing" | null;
  updatedAt: Date;
  userId: string;
};
