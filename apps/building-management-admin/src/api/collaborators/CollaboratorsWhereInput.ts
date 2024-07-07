import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";

export type CollaboratorsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: "Option1";
  email?: StringNullableFilter;
  building?: BuildingsWhereUniqueInput;
};
