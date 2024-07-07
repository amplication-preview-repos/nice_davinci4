import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RentHomesWhereUniqueInput } from "../rentHomes/RentHomesWhereUniqueInput";
import { ResidentsWhereUniqueInput } from "../residents/ResidentsWhereUniqueInput";

export type ContractsWhereInput = {
  id?: StringFilter;
  contractNumber?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  rentHome?: RentHomesWhereUniqueInput;
  resident?: ResidentsWhereUniqueInput;
};
