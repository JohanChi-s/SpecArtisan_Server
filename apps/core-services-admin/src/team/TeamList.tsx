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

export const TeamList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
