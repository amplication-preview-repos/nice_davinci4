import { SortOrder } from "../../util/SortOrder";

export type BuildingsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  customerId?: SortOrder;
};
