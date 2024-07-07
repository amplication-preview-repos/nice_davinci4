import { Buildings } from "../buildings/Buildings";

export type Customers = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  buildingsItems?: Array<Buildings>;
};
