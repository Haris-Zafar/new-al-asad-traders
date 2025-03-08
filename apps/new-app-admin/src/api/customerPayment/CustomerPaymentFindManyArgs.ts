import { CustomerPaymentWhereInput } from "./CustomerPaymentWhereInput";
import { CustomerPaymentOrderByInput } from "./CustomerPaymentOrderByInput";

export type CustomerPaymentFindManyArgs = {
  where?: CustomerPaymentWhereInput;
  orderBy?: Array<CustomerPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
