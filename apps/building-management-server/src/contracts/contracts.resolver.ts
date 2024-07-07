import * as graphql from "@nestjs/graphql";
import { ContractsResolverBase } from "./base/contracts.resolver.base";
import { Contracts } from "./base/Contracts";
import { ContractsService } from "./contracts.service";

@graphql.Resolver(() => Contracts)
export class ContractsResolver extends ContractsResolverBase {
  constructor(protected readonly service: ContractsService) {
    super(service);
  }
}
