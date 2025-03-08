import { Module } from "@nestjs/common";
import { SupplierPaymentModuleBase } from "./base/supplierPayment.module.base";
import { SupplierPaymentService } from "./supplierPayment.service";
import { SupplierPaymentController } from "./supplierPayment.controller";
import { SupplierPaymentResolver } from "./supplierPayment.resolver";

@Module({
  imports: [SupplierPaymentModuleBase],
  controllers: [SupplierPaymentController],
  providers: [SupplierPaymentService, SupplierPaymentResolver],
  exports: [SupplierPaymentService],
})
export class SupplierPaymentModule {}
