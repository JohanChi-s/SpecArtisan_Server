import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ActionEventTitle } from "../actionEvent/ActionEventTitle";
import { ArchivedTitle } from "../archived/ArchivedTitle";
import { MemberTitle } from "../member/MemberTitle";

export const CollectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="actionEvents"
          reference="ActionEvent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActionEventTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="archiveds"
          reference="Archived"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ArchivedTitle} />
        </ReferenceArrayInput>
        <TextInput label="Author Id" source="authorId" />
        <BooleanInput label="Can Share" source="canShare" />
        <TextInput label="Child Collection Ids" source="childCollectionIds" />
        <TextInput label="Description" source="description" />
        <div />
        <TextInput label="Icon" source="icon" />
        <TextInput label="Index" source="index" />
        <BooleanInput label="Is Saving" source="isSaving" />
        <ReferenceArrayInput
          source="members"
          reference="Member"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MemberTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Parent Collection Id" source="parentCollectionId" />
        <TextInput label="Url" source="url" />
        <TextInput label="Workspace Id" source="workspaceId" />
      </SimpleForm>
    </Create>
  );
};
