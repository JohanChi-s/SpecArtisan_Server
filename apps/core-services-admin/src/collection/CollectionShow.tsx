import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COLLECTION_TITLE_FIELD } from "./CollectionTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const CollectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author Id" source="authorId" />
        <BooleanField label="Can Share" source="canShare" />
        <TextField label="Child Collection Ids" source="childCollectionIds" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Download Permission" source="downloadPermission" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="Index" source="index" />
        <BooleanField label="Is Saving" source="isSaving" />
        <TextField label="Name" source="name" />
        <TextField label="Parent Collection Id" source="parentCollectionId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <TextField label="Workspace Id" source="workspaceId" />
        <ReferenceManyField
          reference="ActionEvent"
          target="collectionId"
          label="ActionEvents"
        >
          <Datagrid rowClick="show">
            <TextField label="Action" source="action" />
            <TextField label="Actor" source="actor" />
            <TextField label="Assignee" source="assignee" />
            <TextField label="Assigner" source="assigner" />
            <ReferenceField
              label="Collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Member"
          target="collectionId"
          label="Members"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
