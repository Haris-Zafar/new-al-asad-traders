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
import { OrderItem } from "./OrderItem";
import { OrderItemCountArgs } from "./OrderItemCountArgs";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemFindUniqueArgs } from "./OrderItemFindUniqueArgs";
import { CreateOrderItemArgs } from "./CreateOrderItemArgs";
import { UpdateOrderItemArgs } from "./UpdateOrderItemArgs";
import { DeleteOrderItemArgs } from "./DeleteOrderItemArgs";
import { DemandListItemFindManyArgs } from "../../demandListItem/base/DemandListItemFindManyArgs";
import { DemandListItem } from "../../demandListItem/base/DemandListItem";
import { Order } from "../../order/base/Order";
import { Product } from "../../product/base/Product";
import { OrderItemService } from "../orderItem.service";
@graphql.Resolver(() => OrderItem)
export class OrderItemResolverBase {
  constructor(protected readonly service: OrderItemService) {}

  async _orderItemsMeta(
    @graphql.Args() args: OrderItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OrderItem])
  async orderItems(
    @graphql.Args() args: OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.service.orderItems(args);
  }

  @graphql.Query(() => OrderItem, { nullable: true })
  async orderItem(
    @graphql.Args() args: OrderItemFindUniqueArgs
  ): Promise<OrderItem | null> {
    const result = await this.service.orderItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OrderItem)
  async createOrderItem(
    @graphql.Args() args: CreateOrderItemArgs
  ): Promise<OrderItem> {
    return await this.service.createOrderItem({
      ...args,
      data: {
        ...args.data,

        order: {
          connect: args.data.order,
        },

        product: {
          connect: args.data.product,
        },
      },
    });
  }

  @graphql.Mutation(() => OrderItem)
  async updateOrderItem(
    @graphql.Args() args: UpdateOrderItemArgs
  ): Promise<OrderItem | null> {
    try {
      return await this.service.updateOrderItem({
        ...args,
        data: {
          ...args.data,

          order: {
            connect: args.data.order,
          },

          product: {
            connect: args.data.product,
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

  @graphql.Mutation(() => OrderItem)
  async deleteOrderItem(
    @graphql.Args() args: DeleteOrderItemArgs
  ): Promise<OrderItem | null> {
    try {
      return await this.service.deleteOrderItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [DemandListItem], { name: "demandListItems" })
  async findDemandListItems(
    @graphql.Parent() parent: OrderItem,
    @graphql.Args() args: DemandListItemFindManyArgs
  ): Promise<DemandListItem[]> {
    const results = await this.service.findDemandListItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  async getOrder(@graphql.Parent() parent: OrderItem): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async getProduct(
    @graphql.Parent() parent: OrderItem
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
