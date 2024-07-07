import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BUILDINGS_TITLE_FIELD } from "../buildings/BuildingsTitle";

export const RentHomesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RentHomesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Building"
          source="buildings.id"
          reference="Buildings"
        >
          <TextField source={BUILDINGS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
