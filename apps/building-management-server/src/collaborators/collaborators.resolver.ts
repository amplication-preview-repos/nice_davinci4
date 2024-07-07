import * as graphql from "@nestjs/graphql";
import { CollaboratorsResolverBase } from "./base/collaborators.resolver.base";
import { Collaborators } from "./base/Collaborators";
import { CollaboratorsService } from "./collaborators.service";

@graphql.Resolver(() => Collaborators)
export class CollaboratorsResolver extends CollaboratorsResolverBase {
  constructor(protected readonly service: CollaboratorsService) {
    super(service);
  }
}
