import { RentHomes as TRentHomes } from "../api/rentHomes/RentHomes";

export const RENTHOMES_TITLE_FIELD = "name";

export const RentHomesTitle = (record: TRentHomes): string => {
  return record.name?.toString() || String(record.id);
};
