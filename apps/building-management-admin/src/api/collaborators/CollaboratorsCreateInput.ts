import { BuildingsWhereUniqueInput } from "../buildings/BuildingsWhereUniqueInput";

export type CollaboratorsCreateInput = {
  name?: string | null;
  role?: "Option1" | null;
  email?: string | null;
  building?: BuildingsWhereUniqueInput | null;
};
