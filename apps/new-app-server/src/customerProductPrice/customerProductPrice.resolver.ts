import * as graphql from "@nestjs/graphql";
import { CustomerProductPriceResolverBase } from "./base/customerProductPrice.resolver.base";
import { CustomerProductPrice } from "./base/CustomerProductPrice";
import { CustomerProductPriceService } from "./customerProductPrice.service";

@graphql.Resolver(() => CustomerProductPrice)
export class CustomerProductPriceResolver extends CustomerProductPriceResolverBase {
  constructor(protected readonly service: CustomerProductPriceService) {
    super(service);
  }
}
