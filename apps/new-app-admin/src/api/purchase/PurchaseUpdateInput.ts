import { DemandListWhereUniqueInput } from "../demandList/DemandListWhereUniqueInput";
import { PurchaseItemUpdateManyWithoutPurchasesInput } from "./PurchaseItemUpdateManyWithoutPurchasesInput";
import { SupplierPaymentUpdateManyWithoutPurchasesInput } from "./SupplierPaymentUpdateManyWithoutPurchasesInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseUpdateInput = {
  demandList?: DemandListWhereUniqueInput;
  items?: PurchaseItemUpdateManyWithoutPurchasesInput;
  paidAmount?: number;
  payments?: SupplierPaymentUpdateManyWithoutPurchasesInput;
  purchaseNumber?: string;
  supplier?: SupplierWhereUniqueInput;
  totalAmount?: number;
};
