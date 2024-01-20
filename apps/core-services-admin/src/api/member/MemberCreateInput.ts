import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { DocumentCreateNestedManyWithoutMembersInput } from "./DocumentCreateNestedManyWithoutMembersInput";
import { InputJsonValue } from "../../types";

export type MemberCreateInput = {
  collection?: CollectionWhereUniqueInput | null;
  document?: DocumentCreateNestedManyWithoutMembersInput;
  role: InputJsonValue;
  userId?: string | null;
};
