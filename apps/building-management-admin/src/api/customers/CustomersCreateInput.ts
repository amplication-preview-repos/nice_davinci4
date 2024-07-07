import { BuildingsCreateNestedManyWithoutCustomersItemsInput } from "./BuildingsCreateNestedManyWithoutCustomersItemsInput";

export type CustomersCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  buildingsItems?: BuildingsCreateNestedManyWithoutCustomersItemsInput;
};
