/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CustomerPaymentService } from "../customerPayment.service";
import { CustomerPaymentCreateInput } from "./CustomerPaymentCreateInput";
import { CustomerPayment } from "./CustomerPayment";
import { CustomerPaymentFindManyArgs } from "./CustomerPaymentFindManyArgs";
import { CustomerPaymentWhereUniqueInput } from "./CustomerPaymentWhereUniqueInput";
import { CustomerPaymentUpdateInput } from "./CustomerPaymentUpdateInput";

export class CustomerPaymentControllerBase {
  constructor(protected readonly service: CustomerPaymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerPayment })
  async createCustomerPayment(
    @common.Body() data: CustomerPaymentCreateInput
  ): Promise<CustomerPayment> {
    return await this.service.createCustomerPayment({
      data: {
        ...data,

        customer: {
          connect: data.customer,
        },

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        notes: true,

        order: {
          select: {
            id: true,
          },
        },

        paymentDate: true,
        paymentMethod: true,
        reference: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomerPayment] })
  @ApiNestedQuery(CustomerPaymentFindManyArgs)
  async customerPayments(
    @common.Req() request: Request
  ): Promise<CustomerPayment[]> {
    const args = plainToClass(CustomerPaymentFindManyArgs, request.query);
    return this.service.customerPayments({
      ...args,
      select: {
        amount: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        notes: true,

        order: {
          select: {
            id: true,
          },
        },

        paymentDate: true,
        paymentMethod: true,
        reference: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomerPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customerPayment(
    @common.Param() params: CustomerPaymentWhereUniqueInput
  ): Promise<CustomerPayment | null> {
    const result = await this.service.customerPayment({
      where: params,
      select: {
        amount: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        notes: true,

        order: {
          select: {
            id: true,
          },
        },

        paymentDate: true,
        paymentMethod: true,
        reference: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CustomerPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomerPayment(
    @common.Param() params: CustomerPaymentWhereUniqueInput,
    @common.Body() data: CustomerPaymentUpdateInput
  ): Promise<CustomerPayment | null> {
    try {
      return await this.service.updateCustomerPayment({
        where: params,
        data: {
          ...data,

          customer: {
            connect: data.customer,
          },

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,
          notes: true,

          order: {
            select: {
              id: true,
            },
          },

          paymentDate: true,
          paymentMethod: true,
          reference: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CustomerPayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomerPayment(
    @common.Param() params: CustomerPaymentWhereUniqueInput
  ): Promise<CustomerPayment | null> {
    try {
      return await this.service.deleteCustomerPayment({
        where: params,
        select: {
          amount: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,
          notes: true,

          order: {
            select: {
              id: true,
            },
          },

          paymentDate: true,
          paymentMethod: true,
          reference: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
