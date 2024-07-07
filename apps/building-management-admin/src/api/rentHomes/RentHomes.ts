import { Buildings } from "../buildings/Buildings";
import { Contracts } from "../contracts/Contracts";

export type RentHomes = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  building?: Buildings | null;
  contractsItems?: Array<Contracts>;
};
