import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { ActionEventTitle } from "../actionEvent/ActionEventTitle";
import { ArchivedTitle } from "../archived/ArchivedTitle";
import { DocumentTitle } from "./DocumentTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { MemberTitle } from "../member/MemberTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="authorId" source="authorId" />
        <ReferenceArrayInput
          source="childDocuments"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Collection Id" source="collectionId" />
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Emoji" source="emoji" />
        <BooleanInput label="Is Full Width" source="isFullWidth" />
        <BooleanInput label="isPublic" source="isPublic" />
        <ReferenceArrayInput
          source="members"
          reference="Member"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MemberTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Revision" source="revision" />
        <TextInput label="Template Id" source="templateId" />
        <TextInput label="Text" source="text" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
