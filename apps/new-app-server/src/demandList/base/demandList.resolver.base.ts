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
import { DemandList } from "./DemandList";
import { DemandListCountArgs } from "./DemandListCountArgs";
import { DemandListFindManyArgs } from "./DemandListFindManyArgs";
import { DemandListFindUniqueArgs } from "./DemandListFindUniqueArgs";
import { CreateDemandListArgs } from "./CreateDemandListArgs";
import { UpdateDemandListArgs } from "./UpdateDemandListArgs";
import { DeleteDemandListArgs } from "./DeleteDemandListArgs";
import { DemandListItemFindManyArgs } from "../../demandListItem/base/DemandListItemFindManyArgs";
import { DemandListItem } from "../../demandListItem/base/DemandListItem";
import { Purchase } from "../../purchase/base/Purchase";
import { Supplier } from "../../supplier/base/Supplier";
import { DemandListService } from "../demandList.service";
@graphql.Resolver(() => DemandList)
export class DemandListResolverBase {
  constructor(protected readonly service: DemandListService) {}

  async _demandListsMeta(
    @graphql.Args() args: DemandListCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DemandList])
  async demandLists(
    @graphql.Args() args: DemandListFindManyArgs
  ): Promise<DemandList[]> {
    return this.service.demandLists(args);
  }

  @graphql.Query(() => DemandList, { nullable: true })
  async demandList(
    @graphql.Args() args: DemandListFindUniqueArgs
  ): Promise<DemandList | null> {
    const result = await this.service.demandList(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DemandList)
  async createDemandList(
    @graphql.Args() args: CreateDemandListArgs
  ): Promise<DemandList> {
    return await this.service.createDemandList({
      ...args,
      data: {
        ...args.data,

        purchase: args.data.purchase
          ? {
              connect: args.data.purchase,
            }
          : undefined,

        supplier: {
          connect: args.data.supplier,
        },
      },
    });
  }

  @graphql.Mutation(() => DemandList)
  async updateDemandList(
    @graphql.Args() args: UpdateDemandListArgs
  ): Promise<DemandList | null> {
    try {
      return await this.service.updateDemandList({
        ...args,
        data: {
          ...args.data,

          purchase: args.data.purchase
            ? {
                connect: args.data.purchase,
              }
            : undefined,

          supplier: {
            connect: args.data.supplier,
          },
        },
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

  @graphql.Mutation(() => DemandList)
  async deleteDemandList(
    @graphql.Args() args: DeleteDemandListArgs
  ): Promise<DemandList | null> {
    try {
      return await this.service.deleteDemandList(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [DemandListItem], { name: "items" })
  async findItems(
    @graphql.Parent() parent: DemandList,
    @graphql.Args() args: DemandListItemFindManyArgs
  ): Promise<DemandListItem[]> {
    const results = await this.service.findItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Purchase, {
    nullable: true,
    name: "purchase",
  })
  async getPurchase(
    @graphql.Parent() parent: DemandList
  ): Promise<Purchase | null> {
    const result = await this.service.getPurchase(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Supplier, {
    nullable: true,
    name: "supplier",
  })
  async getSupplier(
    @graphql.Parent() parent: DemandList
  ): Promise<Supplier | null> {
    const result = await this.service.getSupplier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
