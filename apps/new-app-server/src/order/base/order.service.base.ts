/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Order as PrismaOrder,
  OrderItem as PrismaOrderItem,
  CustomerPayment as PrismaCustomerPayment,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OrderCountArgs, "select">): Promise<number> {
    return this.prisma.order.count(args);
  }

  async orders(args: Prisma.OrderFindManyArgs): Promise<PrismaOrder[]> {
    return this.prisma.order.findMany(args);
  }
  async order(args: Prisma.OrderFindUniqueArgs): Promise<PrismaOrder | null> {
    return this.prisma.order.findUnique(args);
  }
  async createOrder(args: Prisma.OrderCreateArgs): Promise<PrismaOrder> {
    return this.prisma.order.create(args);
  }
  async updateOrder(args: Prisma.OrderUpdateArgs): Promise<PrismaOrder> {
    return this.prisma.order.update(args);
  }
  async deleteOrder(args: Prisma.OrderDeleteArgs): Promise<PrismaOrder> {
    return this.prisma.order.delete(args);
  }

  async findItems(
    parentId: string,
    args: Prisma.OrderItemFindManyArgs
  ): Promise<PrismaOrderItem[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .items(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.CustomerPaymentFindManyArgs
  ): Promise<PrismaCustomerPayment[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
