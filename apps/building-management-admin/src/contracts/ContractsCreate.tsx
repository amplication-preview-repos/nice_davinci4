import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RentHomesTitle } from "../rentHomes/RentHomesTitle";
import { ResidentsTitle } from "../residents/ResidentsTitle";

export const ContractsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ContractNumber" source="contractNumber" />
        <DateTimeInput label="StartDate" source="startDate" />
        <DateTimeInput label="EndDate" source="endDate" />
        <ReferenceInput
          source="rentHome.id"
          reference="RentHomes"
          label="RentHome"
        >
          <SelectInput optionText={RentHomesTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="resident.id"
          reference="Residents"
          label="Resident"
        >
          <SelectInput optionText={ResidentsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
