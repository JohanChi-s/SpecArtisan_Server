import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Avatar Url" source="avatarUrl" />
        <BooleanField label="Can Comment" source="canComment" />
        <BooleanField label="Can Share" source="canShare" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Default User Role" source="defaultUserRole" />
        <TextField label="ID" source="id" />
        <BooleanField label="Invite Required" source="inviteRequired" />
        <TextField label="Name" source="name" />
        <TextField label="Sub Domain" source="subDomain" />
        <TextField label="Theme" source="theme" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <TextField label="Workspace Id" source="workspaceId" />
      </SimpleShowLayout>
    </Show>
  );
};
