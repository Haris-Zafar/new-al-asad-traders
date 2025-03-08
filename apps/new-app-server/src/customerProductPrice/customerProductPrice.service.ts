import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerProductPriceServiceBase } from "./base/customerProductPrice.service.base";

@Injectable()
export class CustomerProductPriceService extends CustomerProductPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
