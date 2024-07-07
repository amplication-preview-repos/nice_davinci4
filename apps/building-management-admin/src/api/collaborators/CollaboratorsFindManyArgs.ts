import { CollaboratorsWhereInput } from "./CollaboratorsWhereInput";
import { CollaboratorsOrderByInput } from "./CollaboratorsOrderByInput";

export type CollaboratorsFindManyArgs = {
  where?: CollaboratorsWhereInput;
  orderBy?: Array<CollaboratorsOrderByInput>;
  skip?: number;
  take?: number;
};
