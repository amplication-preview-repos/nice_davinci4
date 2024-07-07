import { ContractsWhereInput } from "./ContractsWhereInput";
import { ContractsOrderByInput } from "./ContractsOrderByInput";

export type ContractsFindManyArgs = {
  where?: ContractsWhereInput;
  orderBy?: Array<ContractsOrderByInput>;
  skip?: number;
  take?: number;
};
