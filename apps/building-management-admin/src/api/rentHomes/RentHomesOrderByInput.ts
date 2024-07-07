import { SortOrder } from "../../util/SortOrder";

export type RentHomesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  buildingId?: SortOrder;
};
