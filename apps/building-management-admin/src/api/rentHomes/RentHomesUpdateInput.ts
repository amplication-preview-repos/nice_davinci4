import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";
import { ContractsUpdateManyWithoutRentHomesItemsInput } from "./ContractsUpdateManyWithoutRentHomesItemsInput";

export type RentHomesUpdateInput = {
  name?: string | null;
  building?: BuildingsWhereUniqueInput | null;
  contractsItems?: ContractsUpdateManyWithoutRentHomesItemsInput;
};
