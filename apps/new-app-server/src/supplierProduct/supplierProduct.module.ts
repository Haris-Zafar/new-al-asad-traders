import { Module } from "@nestjs/common";
import { SupplierProductModuleBase } from "./base/supplierProduct.module.base";
import { SupplierProductService } from "./supplierProduct.service";
import { SupplierProductController } from "./supplierProduct.controller";
import { SupplierProductResolver } from "./supplierProduct.resolver";

@Module({
  imports: [SupplierProductModuleBase],
  controllers: [SupplierProductController],
  providers: [SupplierProductService, SupplierProductResolver],
  exports: [SupplierProductService],
})
export class SupplierProductModule {}
