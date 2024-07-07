import { RentHomesWhereUniqueInput } from "../rentHomes/RentHomesWhereUniqueInput";
import { ResidentsWhereUniqueInput } from "../residents/ResidentsWhereUniqueInput";

export type ContractsCreateInput = {
  contractNumber?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  rentHome?: RentHomesWhereUniqueInput | null;
  resident?: ResidentsWhereUniqueInput | null;
};
