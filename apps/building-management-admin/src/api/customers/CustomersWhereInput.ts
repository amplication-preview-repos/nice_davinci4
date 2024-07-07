import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BuildingsListRelationFilter } from "../buildings/BuildingsListRelationFilter";

export type CustomersWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  buildingsItems?: BuildingsListRelationFilter;
};
