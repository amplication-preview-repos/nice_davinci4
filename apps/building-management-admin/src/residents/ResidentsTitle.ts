import { Residents as TResidents } from "../api/residents/Residents";

export const RESIDENTS_TITLE_FIELD = "name";

export const ResidentsTitle = (record: TResidents): string => {
  return record.name?.toString() || String(record.id);
};
