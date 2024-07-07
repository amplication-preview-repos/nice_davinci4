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
import { Residents } from "./Residents";
import { ResidentsCountArgs } from "./ResidentsCountArgs";
import { ResidentsFindManyArgs } from "./ResidentsFindManyArgs";
import { ResidentsFindUniqueArgs } from "./ResidentsFindUniqueArgs";
import { CreateResidentsArgs } from "./CreateResidentsArgs";
import { UpdateResidentsArgs } from "./UpdateResidentsArgs";
import { DeleteResidentsArgs } from "./DeleteResidentsArgs";
import { ContractsFindManyArgs } from "../../contracts/base/ContractsFindManyArgs";
import { Contracts } from "../../contracts/base/Contracts";
import { ResidentsService } from "../residents.service";
@graphql.Resolver(() => Residents)
export class ResidentsResolverBase {
  constructor(protected readonly service: ResidentsService) {}

  async _residentsItemsMeta(
    @graphql.Args() args: ResidentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Residents])
  async residentsItems(
    @graphql.Args() args: ResidentsFindManyArgs
  ): Promise<Residents[]> {
    return this.service.residentsItems(args);
  }

  @graphql.Query(() => Residents, { nullable: true })
  async residents(
    @graphql.Args() args: ResidentsFindUniqueArgs
  ): Promise<Residents | null> {
    const result = await this.service.residents(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Residents)
  async createResidents(
    @graphql.Args() args: CreateResidentsArgs
  ): Promise<Residents> {
    return await this.service.createResidents({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Residents)
  async updateResidents(
    @graphql.Args() args: UpdateResidentsArgs
  ): Promise<Residents | null> {
    try {
      return await this.service.updateResidents({
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

  @graphql.Mutation(() => Residents)
  async deleteResidents(
    @graphql.Args() args: DeleteResidentsArgs
  ): Promise<Residents | null> {
    try {
      return await this.service.deleteResidents(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Contracts], { name: "contractsItems" })
  async findContractsItems(
    @graphql.Parent() parent: Residents,
    @graphql.Args() args: ContractsFindManyArgs
  ): Promise<Contracts[]> {
    const results = await this.service.findContractsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
