import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BuildingsTitle } from "../buildings/BuildingsTitle";

export const CustomersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="buildingsItems"
          reference="Buildings"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BuildingsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
