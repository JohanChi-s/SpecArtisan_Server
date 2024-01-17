import { ActionEventWhereInput } from "./ActionEventWhereInput";
import { ActionEventOrderByInput } from "./ActionEventOrderByInput";

export type ActionEventFindManyArgs = {
  where?: ActionEventWhereInput;
  orderBy?: Array<ActionEventOrderByInput>;
  skip?: number;
  take?: number;
};
