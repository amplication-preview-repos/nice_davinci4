/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Roles } from "./Roles";
import { RolesCountArgs } from "./RolesCountArgs";
import { RolesFindManyArgs } from "./RolesFindManyArgs";
import { RolesFindUniqueArgs } from "./RolesFindUniqueArgs";
import { CreateRolesArgs } from "./CreateRolesArgs";
import { UpdateRolesArgs } from "./UpdateRolesArgs";
import { DeleteRolesArgs } from "./DeleteRolesArgs";
import { RolesService } from "../roles.service";
@graphql.Resolver(() => Roles)
export class RolesResolverBase {
  constructor(protected readonly service: RolesService) {}

  async _rolesItemsMeta(
    @graphql.Args() args: RolesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Roles])
  async rolesItems(@graphql.Args() args: RolesFindManyArgs): Promise<Roles[]> {
    return this.service.rolesItems(args);
  }

  @graphql.Query(() => Roles, { nullable: true })
  async roles(
    @graphql.Args() args: RolesFindUniqueArgs
  ): Promise<Roles | null> {
    const result = await this.service.roles(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Roles)
  async createRoles(@graphql.Args() args: CreateRolesArgs): Promise<Roles> {
    return await this.service.createRoles({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Roles)
  async updateRoles(
    @graphql.Args() args: UpdateRolesArgs
  ): Promise<Roles | null> {
    try {
      return await this.service.updateRoles({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Roles)
  async deleteRoles(
    @graphql.Args() args: DeleteRolesArgs
  ): Promise<Roles | null> {
    try {
      return await this.service.deleteRoles(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
