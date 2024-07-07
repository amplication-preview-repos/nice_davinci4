import * as graphql from "@nestjs/graphql";
import { RentHomesResolverBase } from "./base/rentHomes.resolver.base";
import { RentHomes } from "./base/RentHomes";
import { RentHomesService } from "./rentHomes.service";

@graphql.Resolver(() => RentHomes)
export class RentHomesResolver extends RentHomesResolverBase {
  constructor(protected readonly service: RentHomesService) {
    super(service);
  }
}
