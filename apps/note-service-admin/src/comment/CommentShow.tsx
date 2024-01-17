import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";
import { COMMENT_TITLE_FIELD } from "./CommentTitle";
import { POSITION_TITLE_FIELD } from "../position/PositionTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
          label="Parent Comment Id"
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
        <ReferenceManyField reference="Comment" target="id" label="Comments">
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
              label="Parent Comment Id"
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
