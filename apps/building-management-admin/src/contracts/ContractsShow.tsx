import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RENTHOMES_TITLE_FIELD } from "../rentHomes/RentHomesTitle";
import { RESIDENTS_TITLE_FIELD } from "../residents/ResidentsTitle";

export const ContractsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
