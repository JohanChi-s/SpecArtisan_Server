import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <TextField label="Age" source="age" />
        <TextField label="Avatar Url" source="avatarUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
