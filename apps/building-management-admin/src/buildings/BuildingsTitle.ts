import { Buildings as TBuildings } from "../api/buildings/Buildings";

export const BUILDINGS_TITLE_FIELD = "name";

export const BuildingsTitle = (record: TBuildings): string => {
  return record.name?.toString() || String(record.id);
};
