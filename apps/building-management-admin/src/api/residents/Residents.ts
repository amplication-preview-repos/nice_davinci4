import { Contracts } from "../contracts/Contracts";

export type Residents = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  contractsItems?: Array<Contracts>;
};
