import { Module } from "@nestjs/common";
import { CustomerProductPriceModuleBase } from "./base/customerProductPrice.module.base";
import { CustomerProductPriceService } from "./customerProductPrice.service";
import { CustomerProductPriceController } from "./customerProductPrice.controller";

@Module({
  imports: [CustomerProductPriceModuleBase],
  controllers: [CustomerProductPriceController],
  providers: [CustomerProductPriceService],
  exports: [CustomerProductPriceService],
})
export class CustomerProductPriceModule {}
