import { ResidentsWhereInput } from "./ResidentsWhereInput";
import { ResidentsOrderByInput } from "./ResidentsOrderByInput";

export type ResidentsFindManyArgs = {
  where?: ResidentsWhereInput;
  orderBy?: Array<ResidentsOrderByInput>;
  skip?: number;
  take?: number;
};
