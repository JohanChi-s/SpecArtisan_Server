import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const WorkspaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Domain" source="domain" />
        <BooleanInput label="isPublic" source="isPublic" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
