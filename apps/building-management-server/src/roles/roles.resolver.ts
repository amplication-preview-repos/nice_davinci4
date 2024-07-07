import * as graphql from "@nestjs/graphql";
import { RolesResolverBase } from "./base/roles.resolver.base";
import { Roles } from "./base/Roles";
import { RolesService } from "./roles.service";

@graphql.Resolver(() => Roles)
export class RolesResolver extends RolesResolverBase {
  constructor(protected readonly service: RolesService) {
    super(service);
  }
}
