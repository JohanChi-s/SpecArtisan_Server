import { Position as TPosition } from "../api/position/Position";

export const POSITION_TITLE_FIELD = "content";

export const PositionTitle = (record: TPosition): string => {
  return record.content?.toString() || String(record.id);
};
