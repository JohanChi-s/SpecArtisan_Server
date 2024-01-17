import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Documents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="authorId" source="authorId" />
        <TextField label="Collection Id" source="collectionId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Emoji" source="emoji" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Full Width" source="isFullWidth" />
        <BooleanField label="isPublic" source="isPublic" />
        <DateField source="publishedAt" label="Published At" />
        <TextField label="Revision" source="revision" />
        <TextField label="Template Id" source="templateId" />
        <TextField label="Text" source="text" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
