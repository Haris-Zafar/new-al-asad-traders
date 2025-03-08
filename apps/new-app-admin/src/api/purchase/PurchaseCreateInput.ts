import { DemandListWhereUniqueInput } from "../demandList/DemandListWhereUniqueInput";
import { PurchaseItemCreateNestedManyWithoutPurchasesInput } from "./PurchaseItemCreateNestedManyWithoutPurchasesInput";
import { SupplierPaymentCreateNestedManyWithoutPurchasesInput } from "./SupplierPaymentCreateNestedManyWithoutPurchasesInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseCreateInput = {
  demandList: DemandListWhereUniqueInput;
  items?: PurchaseItemCreateNestedManyWithoutPurchasesInput;
  paidAmount: number;
  payments?: SupplierPaymentCreateNestedManyWithoutPurchasesInput;
  purchaseNumber: string;
  supplier: SupplierWhereUniqueInput;
  totalAmount: number;
};
