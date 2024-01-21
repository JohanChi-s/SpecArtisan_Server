import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { DocumentUpdateManyWithoutMembersInput } from "./DocumentUpdateManyWithoutMembersInput";
import { InputJsonValue } from "../../types";

export type MemberUpdateInput = {
  collection?: CollectionWhereUniqueInput | null;
  document?: DocumentUpdateManyWithoutMembersInput;
  role?: InputJsonValue;
  userId?: string | null;
};
