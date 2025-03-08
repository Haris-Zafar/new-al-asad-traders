import * as graphql from "@nestjs/graphql";
import { SupplierPaymentResolverBase } from "./base/supplierPayment.resolver.base";
import { SupplierPayment } from "./base/SupplierPayment";
import { SupplierPaymentService } from "./supplierPayment.service";

@graphql.Resolver(() => SupplierPayment)
export class SupplierPaymentResolver extends SupplierPaymentResolverBase {
  constructor(protected readonly service: SupplierPaymentService) {
    super(service);
  }
}
