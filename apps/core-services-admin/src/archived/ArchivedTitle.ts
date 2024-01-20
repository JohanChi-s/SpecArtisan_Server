import { Archived as TArchived } from "../api/archived/Archived";

export const ARCHIVED_TITLE_FIELD = "userId";

export const ArchivedTitle = (record: TArchived): string => {
  return record.userId?.toString() || String(record.id);
};
