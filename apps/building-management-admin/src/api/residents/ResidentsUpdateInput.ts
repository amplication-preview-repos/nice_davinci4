import { ContractsUpdateManyWithoutResidentsItemsInput } from "./ContractsUpdateManyWithoutResidentsItemsInput";

export type ResidentsUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  contractsItems?: ContractsUpdateManyWithoutResidentsItemsInput;
};
