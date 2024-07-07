import { Collaborators as TCollaborators } from "../api/collaborators/Collaborators";

export const COLLABORATORS_TITLE_FIELD = "name";

export const CollaboratorsTitle = (record: TCollaborators): string => {
  return record.name?.toString() || String(record.id);
};
