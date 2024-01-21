import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CollectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Collections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Author Id" source="authorId" />
        <BooleanField label="Can Share" source="canShare" />
        <TextField label="Child Collection Ids" source="childCollectionIds" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Download Permission" source="downloadPermission" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="Index" source="index" />
        <BooleanField label="Is Saving" source="isSaving" />
        <TextField label="Name" source="name" />
        <TextField label="Parent Collection Id" source="parentCollectionId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <TextField label="Workspace Id" source="workspaceId" />
      </Datagrid>
    </List>
  );
};
