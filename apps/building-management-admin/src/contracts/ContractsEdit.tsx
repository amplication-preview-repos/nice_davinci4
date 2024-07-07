import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RentHomesTitle } from "../rentHomes/RentHomesTitle";
import { ResidentsTitle } from "../residents/ResidentsTitle";

export const ContractsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
