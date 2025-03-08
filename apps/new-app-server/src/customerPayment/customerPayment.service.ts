import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerPaymentServiceBase } from "./base/customerPayment.service.base";

@Injectable()
export class CustomerPaymentService extends CustomerPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
