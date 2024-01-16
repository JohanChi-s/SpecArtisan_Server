import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const WorkspaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Domain" source="domain" />
        <BooleanInput label="isPublic" source="isPublic" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
