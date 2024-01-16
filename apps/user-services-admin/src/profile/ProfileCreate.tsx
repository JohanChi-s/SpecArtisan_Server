import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Avatar Url" source="avatarUrl" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
