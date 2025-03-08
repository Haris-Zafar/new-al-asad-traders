import { CustomerPayment as TCustomerPayment } from "../api/customerPayment/CustomerPayment";

export const CUSTOMERPAYMENT_TITLE_FIELD = "notes";

export const CustomerPaymentTitle = (record: TCustomerPayment): string => {
  return record.notes?.toString() || String(record.id);
};
