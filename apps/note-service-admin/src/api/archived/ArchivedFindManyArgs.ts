import { ArchivedWhereInput } from "./ArchivedWhereInput";
import { ArchivedOrderByInput } from "./ArchivedOrderByInput";

export type ArchivedFindManyArgs = {
  where?: ArchivedWhereInput;
  orderBy?: Array<ArchivedOrderByInput>;
  skip?: number;
  take?: number;
};
