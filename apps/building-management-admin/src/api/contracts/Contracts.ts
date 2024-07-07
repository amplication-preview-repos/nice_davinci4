import { RentHomes } from "../rentHomes/RentHomes";
import { Residents } from "../residents/Residents";

export type Contracts = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contractNumber: string | null;
  startDate: Date | null;
  endDate: Date | null;
  rentHome?: RentHomes | null;
  resident?: Residents | null;
};
