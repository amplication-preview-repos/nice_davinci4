import { RentHomesWhereInput } from "./RentHomesWhereInput";
import { RentHomesOrderByInput } from "./RentHomesOrderByInput";

export type RentHomesFindManyArgs = {
  where?: RentHomesWhereInput;
  orderBy?: Array<RentHomesOrderByInput>;
  skip?: number;
  take?: number;
};
