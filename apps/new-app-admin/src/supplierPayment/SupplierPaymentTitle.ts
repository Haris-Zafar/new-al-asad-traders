import { SupplierPayment as TSupplierPayment } from "../api/supplierPayment/SupplierPayment";

export const SUPPLIERPAYMENT_TITLE_FIELD = "notes";

export const SupplierPaymentTitle = (record: TSupplierPayment): string => {
  return record.notes?.toString() || String(record.id);
};
