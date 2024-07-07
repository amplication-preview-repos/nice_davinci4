import { ContractsCreateNestedManyWithoutResidentsItemsInput } from "./ContractsCreateNestedManyWithoutResidentsItemsInput";

export type ResidentsCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  contractsItems?: ContractsCreateNestedManyWithoutResidentsItemsInput;
};
