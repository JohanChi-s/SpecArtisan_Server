import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Avatar Url" source="avatarUrl" />
        <BooleanInput label="Can Comment" source="canComment" />
        <BooleanInput label="Can Share" source="canShare" />
        <TextInput label="Default User Role" source="defaultUserRole" />
        <BooleanInput label="Invite Required" source="inviteRequired" />
        <TextInput label="Name" source="name" />
        <TextInput label="Sub Domain" source="subDomain" />
        <TextInput label="Theme" source="theme" />
        <TextInput label="Url" source="url" />
        <TextInput label="Workspace Id" source="workspaceId" />
      </SimpleForm>
    </Edit>
  );
};
