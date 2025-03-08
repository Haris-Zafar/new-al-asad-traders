import { Module } from "@nestjs/common";
import { SupplierProductModuleBase } from "./base/supplierProduct.module.base";
import { SupplierProductService } from "./supplierProduct.service";
import { SupplierProductController } from "./supplierProduct.controller";

@Module({
  imports: [SupplierProductModuleBase],
  controllers: [SupplierProductController],
  providers: [SupplierProductService],
  exports: [SupplierProductService],
})
export class SupplierProductModule {}
