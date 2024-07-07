import { BuildingsWhereInput } from "./BuildingsWhereInput";
import { BuildingsOrderByInput } from "./BuildingsOrderByInput";

export type BuildingsFindManyArgs = {
  where?: BuildingsWhereInput;
  orderBy?: Array<BuildingsOrderByInput>;
  skip?: number;
  take?: number;
};
