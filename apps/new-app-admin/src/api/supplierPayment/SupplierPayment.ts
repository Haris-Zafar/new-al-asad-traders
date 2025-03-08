import { Purchase } from "../purchase/Purchase";
import { Supplier } from "../supplier/Supplier";

export type SupplierPayment = {
  amount: number;
  createdAt: Date;
  id: string;
  notes: string | null;
  paymentDate: Date;
  paymentMethod?: "CASH" | "BANK_TRANSFER" | "CHECK" | "CREDIT" | "OTHER";
  purchase?: Purchase | null;
  reference: string | null;
  supplier?: Supplier;
  updatedAt: Date;
};
