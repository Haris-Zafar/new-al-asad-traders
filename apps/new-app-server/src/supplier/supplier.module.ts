import { Module } from "@nestjs/common";
import { SupplierModuleBase } from "./base/supplier.module.base";
import { SupplierService } from "./supplier.service";
import { SupplierController } from "./supplier.controller";

@Module({
  imports: [SupplierModuleBase],
  controllers: [SupplierController],
  providers: [SupplierService],
  exports: [SupplierService],
})
export class SupplierModule {}
