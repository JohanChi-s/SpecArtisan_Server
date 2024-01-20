import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { CollectionTitle } from "../collection/CollectionTitle";
import { DocumentTitle } from "../document/DocumentTitle";

export const ActionEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="action"
          label="Action"
          choices={[
            { label: "Download", value: "Download" },
            { label: "Upload", value: "Upload" },
            { label: "Edit", value: "Edit" },
            { label: "Delete", value: "Delete" },
            { label: "AddRole", value: "AddRole" },
            { label: "RemoveRole", value: "RemoveRole" },
            { label: "Duplicate", value: "Duplicate" },
            { label: "Comment", value: "Comment" },
            { label: "Share", value: "Share" },
            { label: "Assign", value: "Assign" },
            { label: "Star", value: "Star" },
            { label: "Public", value: "Public" },
            { label: "Private", value: "Private" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Actor" source="actor" />
        <TextInput label="Assignee" source="assignee" />
        <TextInput label="Assigner" source="assigner" />
        <ReferenceInput
          source="collection.id"
          reference="Collection"
          label="Collection"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
