import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupplierPaymentServiceBase } from "./base/supplierPayment.service.base";

@Injectable()
export class SupplierPaymentService extends SupplierPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
