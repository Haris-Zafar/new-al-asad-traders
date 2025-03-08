import { Module } from "@nestjs/common";
import { CustomerPaymentModuleBase } from "./base/customerPayment.module.base";
import { CustomerPaymentService } from "./customerPayment.service";
import { CustomerPaymentController } from "./customerPayment.controller";

@Module({
  imports: [CustomerPaymentModuleBase],
  controllers: [CustomerPaymentController],
  providers: [CustomerPaymentService],
  exports: [CustomerPaymentService],
})
export class CustomerPaymentModule {}
