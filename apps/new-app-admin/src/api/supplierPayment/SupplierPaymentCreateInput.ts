import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type SupplierPaymentCreateInput = {
  amount: number;
  notes?: string | null;
  paymentMethod: "CASH" | "BANK_TRANSFER" | "CHECK" | "CREDIT" | "OTHER";
  purchase?: PurchaseWhereUniqueInput | null;
  reference?: string | null;
  supplier: SupplierWhereUniqueInput;
};
