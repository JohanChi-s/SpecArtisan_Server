import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const PositionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Col" source="col" />
        <ReferenceInput
          source="comments.id"
          reference="Comment"
          label="Comments"
        >
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Line" source="line" />
        <TextInput label="To Col" source="toCol" />
        <TextInput label="To Line" source="toLine" />
      </SimpleForm>
    </Create>
  );
};
