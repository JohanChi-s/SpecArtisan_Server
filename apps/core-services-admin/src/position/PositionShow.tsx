import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";

export const PositionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Col" source="col" />
        <ReferenceField
          label="Comments"
          source="comment.id"
          reference="Comment"
        >
          <TextField source={COMMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Line" source="line" />
        <TextField label="To Col" source="toCol" />
        <TextField label="To Line" source="toLine" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
