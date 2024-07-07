import { BuildingsUpdateManyWithoutCustomersItemsInput } from "./BuildingsUpdateManyWithoutCustomersItemsInput";

export type CustomersUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  buildingsItems?: BuildingsUpdateManyWithoutCustomersItemsInput;
};
