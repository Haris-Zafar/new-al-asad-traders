import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerPaymentService } from "./customerPayment.service";
import { CustomerPaymentControllerBase } from "./base/customerPayment.controller.base";

@swagger.ApiTags("customerPayments")
@common.Controller("customerPayments")
export class CustomerPaymentController extends CustomerPaymentControllerBase {
  constructor(protected readonly service: CustomerPaymentService) {
    super(service);
  }
}
