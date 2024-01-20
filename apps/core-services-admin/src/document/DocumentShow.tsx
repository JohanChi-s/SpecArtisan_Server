import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";
import { DOCUMENT_TITLE_FIELD } from "./DocumentTitle";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { POSITION_TITLE_FIELD } from "../position/PositionTitle";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author Id" source="authorId" />
        <TextField label="Collection Id" source="collectionId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Emoji" source="emoji" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Full Width" source="isFullWidth" />
        <BooleanField label="Is Public" source="isPublic" />
        <DateField source="publishedAt" label="Published At" />
        <TextField label="Revision" source="revision" />
        <TextField label="Template Id" source="templateId" />
        <TextField label="Text" source="text" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ActionEvent"
          target="documentId"
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
          reference="Comment"
          target="documentId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Parent Comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Position"
              source="position.id"
              reference="Position"
            >
              <TextField source={POSITION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User Id" source="userId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
