import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const ActionEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ActionEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Action" source="action" />
        <TextField label="Actor" source="actor" />
        <TextField label="Assignee" source="assignee" />
        <TextField label="Assigner" source="assigner" />
        <ReferenceField
          label="Collection Id"
          source="collection.id"
          reference="Collection"
        >
          <TextField source={COLLECTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Document Id"
          source="document.id"
          reference="Document"
        >
          <TextField source={DOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
