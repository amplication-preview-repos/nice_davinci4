import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollaboratorsListRelationFilter } from "../collaborators/CollaboratorsListRelationFilter";
import { RentHomesListRelationFilter } from "../rentHomes/RentHomesListRelationFilter";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";

export type BuildingsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  collaboratorsItems?: CollaboratorsListRelationFilter;
  rentHomesItems?: RentHomesListRelationFilter;
  customer?: CustomersWhereUniqueInput;
};
