import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupplierPaymentService } from "./supplierPayment.service";
import { SupplierPaymentControllerBase } from "./base/supplierPayment.controller.base";

@swagger.ApiTags("supplierPayments")
@common.Controller("supplierPayments")
export class SupplierPaymentController extends SupplierPaymentControllerBase {
  constructor(protected readonly service: SupplierPaymentService) {
    super(service);
  }
}
