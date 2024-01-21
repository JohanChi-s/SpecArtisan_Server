import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";

export const MemberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Members"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Collection"
          source="collection.id"
          reference="Collection"
        >
          <TextField source={COLLECTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
