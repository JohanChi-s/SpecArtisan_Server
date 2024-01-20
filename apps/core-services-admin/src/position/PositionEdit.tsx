import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const PositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
