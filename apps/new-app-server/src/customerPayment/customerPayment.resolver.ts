import * as graphql from "@nestjs/graphql";
import { CustomerPaymentResolverBase } from "./base/customerPayment.resolver.base";
import { CustomerPayment } from "./base/CustomerPayment";
import { CustomerPaymentService } from "./customerPayment.service";

@graphql.Resolver(() => CustomerPayment)
export class CustomerPaymentResolver extends CustomerPaymentResolverBase {
  constructor(protected readonly service: CustomerPaymentService) {
    super(service);
  }
}
