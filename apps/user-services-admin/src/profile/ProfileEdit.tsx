import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Avatar Url" source="avatarUrl" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
