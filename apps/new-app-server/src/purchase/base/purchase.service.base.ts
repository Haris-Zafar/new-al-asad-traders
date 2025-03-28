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
  Purchase as PrismaPurchase,
  PurchaseItem as PrismaPurchaseItem,
  SupplierPayment as PrismaSupplierPayment,
  DemandList as PrismaDemandList,
  Supplier as PrismaSupplier,
} from "@prisma/client";

export class PurchaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PurchaseCountArgs, "select">): Promise<number> {
    return this.prisma.purchase.count(args);
  }

  async purchases(
    args: Prisma.PurchaseFindManyArgs
  ): Promise<PrismaPurchase[]> {
    return this.prisma.purchase.findMany(args);
  }
  async purchase(
    args: Prisma.PurchaseFindUniqueArgs
  ): Promise<PrismaPurchase | null> {
    return this.prisma.purchase.findUnique(args);
  }
  async createPurchase(
    args: Prisma.PurchaseCreateArgs
  ): Promise<PrismaPurchase> {
    return this.prisma.purchase.create(args);
  }
  async updatePurchase(
    args: Prisma.PurchaseUpdateArgs
  ): Promise<PrismaPurchase> {
    return this.prisma.purchase.update(args);
  }
  async deletePurchase(
    args: Prisma.PurchaseDeleteArgs
  ): Promise<PrismaPurchase> {
    return this.prisma.purchase.delete(args);
  }

  async findItems(
    parentId: string,
    args: Prisma.PurchaseItemFindManyArgs
  ): Promise<PrismaPurchaseItem[]> {
    return this.prisma.purchase
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .items(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.SupplierPaymentFindManyArgs
  ): Promise<PrismaSupplierPayment[]> {
    return this.prisma.purchase
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getDemandList(parentId: string): Promise<PrismaDemandList | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .demandList();
  }

  async getSupplier(parentId: string): Promise<PrismaSupplier | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .supplier();
  }
}
