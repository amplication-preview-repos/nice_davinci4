import { SortOrder } from "../../util/SortOrder";

export type CollaboratorsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  email?: SortOrder;
  buildingId?: SortOrder;
};
