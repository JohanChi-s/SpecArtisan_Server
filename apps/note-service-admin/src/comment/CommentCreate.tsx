import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CommentTitle } from "./CommentTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { PositionTitle } from "../position/PositionTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Content" source="content" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="parentCommentId.id"
          reference="Comment"
          label="Parent Comment Id"
        >
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="position.id"
          reference="Position"
          label="Position"
        >
          <SelectInput optionText={PositionTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Done", value: "Done" },
            { label: "Todo", value: "Todo" },
            { label: "Doing", value: "Doing" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
