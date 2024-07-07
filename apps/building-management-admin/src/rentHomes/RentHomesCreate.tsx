import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BuildingsTitle } from "../buildings/BuildingsTitle";
import { ContractsTitle } from "../contracts/ContractsTitle";

export const RentHomesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="building.id"
          reference="Buildings"
          label="Building"
        >
          <SelectInput optionText={BuildingsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="contractsItems"
          reference="Contracts"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
