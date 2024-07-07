import * as graphql from "@nestjs/graphql";
import { ResidentsResolverBase } from "./base/residents.resolver.base";
import { Residents } from "./base/Residents";
import { ResidentsService } from "./residents.service";

@graphql.Resolver(() => Residents)
export class ResidentsResolver extends ResidentsResolverBase {
  constructor(protected readonly service: ResidentsService) {
    super(service);
  }
}
