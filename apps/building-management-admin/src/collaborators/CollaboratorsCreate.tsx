import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { BuildingsTitle } from "../buildings/BuildingsTitle";

export const CollaboratorsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="role"
          label="Role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="building.id"
          reference="Buildings"
          label="Building"
        >
          <SelectInput optionText={BuildingsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
