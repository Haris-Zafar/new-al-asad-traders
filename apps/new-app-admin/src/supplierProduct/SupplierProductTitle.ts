import { SupplierProduct as TSupplierProduct } from "../api/supplierProduct/SupplierProduct";

export const SUPPLIERPRODUCT_TITLE_FIELD = "supplierSku";

export const SupplierProductTitle = (record: TSupplierProduct): string => {
  return record.supplierSku?.toString() || String(record.id);
};
