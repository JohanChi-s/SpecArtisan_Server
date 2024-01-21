import { Member as TMember } from "../api/member/Member";

export const MEMBER_TITLE_FIELD = "userId";

export const MemberTitle = (record: TMember): string => {
  return record.userId?.toString() || String(record.id);
};
