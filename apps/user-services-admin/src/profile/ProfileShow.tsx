import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Age" source="age" />
        <TextField label="Avatar Url" source="avatarUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User Id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
