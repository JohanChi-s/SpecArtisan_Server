import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CollectionTitle } from "../collection/CollectionTitle";
import { DocumentTitle } from "../document/DocumentTitle";

export const MemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="collection.id"
          reference="Collection"
          label="Collection"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="document"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
