import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RENTHOMES_TITLE_FIELD } from "../rentHomes/RentHomesTitle";
import { RESIDENTS_TITLE_FIELD } from "./ResidentsTitle";

export const ResidentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <ReferenceManyField
          reference="Contracts"
          target="residentId"
          label="ContractsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="ContractNumber" source="contractNumber" />
            <TextField label="StartDate" source="startDate" />
            <TextField label="EndDate" source="endDate" />
            <ReferenceField
              label="RentHome"
              source="renthomes.id"
              reference="RentHomes"
            >
              <TextField source={RENTHOMES_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Resident"
              source="residents.id"
              reference="Residents"
            >
              <TextField source={RESIDENTS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
