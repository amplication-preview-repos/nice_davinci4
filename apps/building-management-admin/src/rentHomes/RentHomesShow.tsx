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

import { RENTHOMES_TITLE_FIELD } from "./RentHomesTitle";
import { RESIDENTS_TITLE_FIELD } from "../residents/ResidentsTitle";
import { BUILDINGS_TITLE_FIELD } from "../buildings/BuildingsTitle";

export const RentHomesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Contracts"
          target="rentHomeId"
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
