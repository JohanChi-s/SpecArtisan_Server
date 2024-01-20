import { Document } from "../document/Document";
import { Position } from "../position/Position";

export type Comment = {
  content: string;
  createdAt: Date;
  document?: Document | null;
  id: string;
  parentComment?: Comment | null;
  position?: Position | null;
  replies?: Array<Comment>;
  status?: "Done" | "Todo" | "Doing" | null;
  updatedAt: Date;
  userId: string;
};
