import { Collaborators } from "../collaborators/Collaborators";
import { RentHomes } from "../rentHomes/RentHomes";
import { Customers } from "../customers/Customers";

export type Buildings = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  collaboratorsItems?: Array<Collaborators>;
  rentHomesItems?: Array<RentHomes>;
  customer?: Customers | null;
};
