import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerProductPriceService } from "./customerProductPrice.service";
import { CustomerProductPriceControllerBase } from "./base/customerProductPrice.controller.base";

@swagger.ApiTags("customerProductPrices")
@common.Controller("customerProductPrices")
export class CustomerProductPriceController extends CustomerProductPriceControllerBase {
  constructor(protected readonly service: CustomerProductPriceService) {
    super(service);
  }
}
