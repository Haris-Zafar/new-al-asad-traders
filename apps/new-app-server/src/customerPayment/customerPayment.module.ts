import { Module } from "@nestjs/common";
import { CustomerPaymentModuleBase } from "./base/customerPayment.module.base";
import { CustomerPaymentService } from "./customerPayment.service";
import { CustomerPaymentController } from "./customerPayment.controller";
import { CustomerPaymentResolver } from "./customerPayment.resolver";

@Module({
  imports: [CustomerPaymentModuleBase],
  controllers: [CustomerPaymentController],
  providers: [CustomerPaymentService, CustomerPaymentResolver],
  exports: [CustomerPaymentService],
})
export class CustomerPaymentModule {}
