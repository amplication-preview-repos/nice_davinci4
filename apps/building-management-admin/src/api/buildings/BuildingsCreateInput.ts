import { CollaboratorsCreateNestedManyWithoutBuildingsItemsInput } from "./CollaboratorsCreateNestedManyWithoutBuildingsItemsInput";
import { RentHomesCreateNestedManyWithoutBuildingsItemsInput } from "./RentHomesCreateNestedManyWithoutBuildingsItemsInput";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";

export type BuildingsCreateInput = {
  name?: string | null;
  address?: string | null;
  collaboratorsItems?: CollaboratorsCreateNestedManyWithoutBuildingsItemsInput;
  rentHomesItems?: RentHomesCreateNestedManyWithoutBuildingsItemsInput;
  customer?: CustomersWhereUniqueInput | null;
};
