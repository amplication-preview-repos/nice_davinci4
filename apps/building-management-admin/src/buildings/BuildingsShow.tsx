import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUILDINGS_TITLE_FIELD } from "./BuildingsTitle";
import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";

export const BuildingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Address" source="address" />
        <ReferenceField
          label="Customer"
          source="customers.id"
          reference="Customers"
        >
          <TextField source={CUSTOMERS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Collaborators"
          target="buildingId"
          label="CollaboratorsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Role" source="role" />
            <TextField label="Email" source="email" />
            <ReferenceField
              label="Building"
              source="buildings.id"
              reference="Buildings"
            >
              <TextField source={BUILDINGS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RentHomes"
          target="buildingId"
          label="RentHomesItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
