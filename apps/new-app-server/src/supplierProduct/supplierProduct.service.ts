import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupplierProductServiceBase } from "./base/supplierProduct.service.base";

@Injectable()
export class SupplierProductService extends SupplierProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
