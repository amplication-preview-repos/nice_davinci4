import { CollaboratorsUpdateManyWithoutBuildingsItemsInput } from "./CollaboratorsUpdateManyWithoutBuildingsItemsInput";
import { RentHomesUpdateManyWithoutBuildingsItemsInput } from "./RentHomesUpdateManyWithoutBuildingsItemsInput";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";

export type BuildingsUpdateInput = {
  name?: string | null;
  address?: string | null;
  collaboratorsItems?: CollaboratorsUpdateManyWithoutBuildingsItemsInput;
  rentHomesItems?: RentHomesUpdateManyWithoutBuildingsItemsInput;
  customer?: CustomersWhereUniqueInput | null;
};
