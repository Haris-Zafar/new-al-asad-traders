import { CustomerProductPriceWhereInput } from "./CustomerProductPriceWhereInput";
import { CustomerProductPriceOrderByInput } from "./CustomerProductPriceOrderByInput";

export type CustomerProductPriceFindManyArgs = {
  where?: CustomerProductPriceWhereInput;
  orderBy?: Array<CustomerProductPriceOrderByInput>;
  skip?: number;
  take?: number;
};
