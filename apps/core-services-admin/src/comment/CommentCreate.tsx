import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { CommentTitle } from "./CommentTitle";
import { PositionTitle } from "../position/PositionTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="parentComment.id"
          reference="Comment"
          label="Parent Comment"
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
        <ReferenceArrayInput
          source="replies"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
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
