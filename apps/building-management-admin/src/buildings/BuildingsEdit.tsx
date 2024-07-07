import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CollaboratorsTitle } from "../collaborators/CollaboratorsTitle";
import { RentHomesTitle } from "../rentHomes/RentHomesTitle";
import { CustomersTitle } from "../customers/CustomersTitle";

export const BuildingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="collaboratorsItems"
          reference="Collaborators"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollaboratorsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rentHomesItems"
          reference="RentHomes"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentHomesTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="Customer"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
