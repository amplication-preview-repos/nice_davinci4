import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";
import { ContractsCreateNestedManyWithoutRentHomesItemsInput } from "./ContractsCreateNestedManyWithoutRentHomesItemsInput";

export type RentHomesCreateInput = {
  name?: string | null;
  building?: BuildingsWhereUniqueInput | null;
  contractsItems?: ContractsCreateNestedManyWithoutRentHomesItemsInput;
};
