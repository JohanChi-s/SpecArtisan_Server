import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { CollectionTitle } from "../collection/CollectionTitle";
import { DocumentTitle } from "../document/DocumentTitle";

export const ActionEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="action"
          label="Action"
          choices={[
            { label: "DOWNLOAD", value: "Download" },
            { label: "UPLOAD", value: "Upload" },
            { label: "EDIT", value: "Edit" },
            { label: "DELETE", value: "Delete" },
            { label: "ADD_ROLE", value: "AddRole" },
            { label: "REMOVE_ROLE", value: "RemoveRole" },
            { label: "DUPLICATE", value: "Duplicate" },
            { label: "COMMENT", value: "Comment" },
            { label: "SHARE", value: "Share" },
            { label: "ASSIGN", value: "Assign" },
            { label: "STAR", value: "Star" },
            { label: "PUBLIC", value: "Public" },
            { label: "PRIVATE", value: "Private" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Actor" source="actor" />
        <TextInput label="Assignee" source="assignee" />
        <TextInput label="Assigner" source="assigner" />
        <ReferenceInput
          source="collectionId.id"
          reference="Collection"
          label="Collection Id"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="documentId.id"
          reference="Document"
          label="Document Id"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
