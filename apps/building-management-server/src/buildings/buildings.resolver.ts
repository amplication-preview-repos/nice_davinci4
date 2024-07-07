import * as graphql from "@nestjs/graphql";
import { BuildingsResolverBase } from "./base/buildings.resolver.base";
import { Buildings } from "./base/Buildings";
import { BuildingsService } from "./buildings.service";

@graphql.Resolver(() => Buildings)
export class BuildingsResolver extends BuildingsResolverBase {
  constructor(protected readonly service: BuildingsService) {
    super(service);
  }
}
