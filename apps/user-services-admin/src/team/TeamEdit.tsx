import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

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
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workspaces"
          reference="Workspace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkspaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
