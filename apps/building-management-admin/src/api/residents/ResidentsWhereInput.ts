import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContractsListRelationFilter } from "../contracts/ContractsListRelationFilter";

export type ResidentsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  contractsItems?: ContractsListRelationFilter;
};
