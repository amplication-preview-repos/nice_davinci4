import { SortOrder } from "../../util/SortOrder";

export type ContractsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contractNumber?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  rentHomeId?: SortOrder;
  residentId?: SortOrder;
};
