import { Module } from "@nestjs/common";
import { CustomerProductPriceModuleBase } from "./base/customerProductPrice.module.base";
import { CustomerProductPriceService } from "./customerProductPrice.service";
import { CustomerProductPriceController } from "./customerProductPrice.controller";
import { CustomerProductPriceResolver } from "./customerProductPrice.resolver";

@Module({
  imports: [CustomerProductPriceModuleBase],
  controllers: [CustomerProductPriceController],
  providers: [CustomerProductPriceService, CustomerProductPriceResolver],
  exports: [CustomerProductPriceService],
})
export class CustomerProductPriceModule {}
