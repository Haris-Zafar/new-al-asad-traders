import { SupplierProductWhereInput } from "./SupplierProductWhereInput";
import { SupplierProductOrderByInput } from "./SupplierProductOrderByInput";

export type SupplierProductFindManyArgs = {
  where?: SupplierProductWhereInput;
  orderBy?: Array<SupplierProductOrderByInput>;
  skip?: number;
  take?: number;
};
