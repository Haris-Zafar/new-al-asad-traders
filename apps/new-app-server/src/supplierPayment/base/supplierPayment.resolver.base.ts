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
import { SupplierPayment } from "./SupplierPayment";
import { SupplierPaymentCountArgs } from "./SupplierPaymentCountArgs";
import { SupplierPaymentFindManyArgs } from "./SupplierPaymentFindManyArgs";
import { SupplierPaymentFindUniqueArgs } from "./SupplierPaymentFindUniqueArgs";
import { CreateSupplierPaymentArgs } from "./CreateSupplierPaymentArgs";
import { UpdateSupplierPaymentArgs } from "./UpdateSupplierPaymentArgs";
import { DeleteSupplierPaymentArgs } from "./DeleteSupplierPaymentArgs";
import { Purchase } from "../../purchase/base/Purchase";
import { Supplier } from "../../supplier/base/Supplier";
import { SupplierPaymentService } from "../supplierPayment.service";
@graphql.Resolver(() => SupplierPayment)
export class SupplierPaymentResolverBase {
  constructor(protected readonly service: SupplierPaymentService) {}

  async _supplierPaymentsMeta(
    @graphql.Args() args: SupplierPaymentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SupplierPayment])
  async supplierPayments(
    @graphql.Args() args: SupplierPaymentFindManyArgs
  ): Promise<SupplierPayment[]> {
    return this.service.supplierPayments(args);
  }

  @graphql.Query(() => SupplierPayment, { nullable: true })
  async supplierPayment(
    @graphql.Args() args: SupplierPaymentFindUniqueArgs
  ): Promise<SupplierPayment | null> {
    const result = await this.service.supplierPayment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SupplierPayment)
  async createSupplierPayment(
    @graphql.Args() args: CreateSupplierPaymentArgs
  ): Promise<SupplierPayment> {
    return await this.service.createSupplierPayment({
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

  @graphql.Mutation(() => SupplierPayment)
  async updateSupplierPayment(
    @graphql.Args() args: UpdateSupplierPaymentArgs
  ): Promise<SupplierPayment | null> {
    try {
      return await this.service.updateSupplierPayment({
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

  @graphql.Mutation(() => SupplierPayment)
  async deleteSupplierPayment(
    @graphql.Args() args: DeleteSupplierPaymentArgs
  ): Promise<SupplierPayment | null> {
    try {
      return await this.service.deleteSupplierPayment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Purchase, {
    nullable: true,
    name: "purchase",
  })
  async getPurchase(
    @graphql.Parent() parent: SupplierPayment
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
    @graphql.Parent() parent: SupplierPayment
  ): Promise<Supplier | null> {
    const result = await this.service.getSupplier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
