import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";
import { ContractsListRelationFilter } from "../contracts/ContractsListRelationFilter";

export type RentHomesWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  building?: BuildingsWhereUniqueInput;
  contractsItems?: ContractsListRelationFilter;
};
