import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupplierProductService } from "./supplierProduct.service";
import { SupplierProductControllerBase } from "./base/supplierProduct.controller.base";

@swagger.ApiTags("supplierProducts")
@common.Controller("supplierProducts")
export class SupplierProductController extends SupplierProductControllerBase {
  constructor(protected readonly service: SupplierProductService) {
    super(service);
  }
}
