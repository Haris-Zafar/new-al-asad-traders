import { Module } from "@nestjs/common";
import { SupplierPaymentModuleBase } from "./base/supplierPayment.module.base";
import { SupplierPaymentService } from "./supplierPayment.service";
import { SupplierPaymentController } from "./supplierPayment.controller";

@Module({
  imports: [SupplierPaymentModuleBase],
  controllers: [SupplierPaymentController],
  providers: [SupplierPaymentService],
  exports: [SupplierPaymentService],
})
export class SupplierPaymentModule {}
