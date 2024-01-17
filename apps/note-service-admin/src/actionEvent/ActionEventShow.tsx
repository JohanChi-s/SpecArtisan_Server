import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const ActionEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
