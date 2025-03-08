import * as graphql from "@nestjs/graphql";
import { SupplierProductResolverBase } from "./base/supplierProduct.resolver.base";
import { SupplierProduct } from "./base/SupplierProduct";
import { SupplierProductService } from "./supplierProduct.service";

@graphql.Resolver(() => SupplierProduct)
export class SupplierProductResolver extends SupplierProductResolverBase {
  constructor(protected readonly service: SupplierProductService) {
    super(service);
  }
}
