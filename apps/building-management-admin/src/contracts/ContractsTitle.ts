import { Contracts as TContracts } from "../api/contracts/Contracts";

export const CONTRACTS_TITLE_FIELD = "contractNumber";

export const ContractsTitle = (record: TContracts): string => {
  return record.contractNumber?.toString() || String(record.id);
};
