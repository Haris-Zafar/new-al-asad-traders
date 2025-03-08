import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type CustomerProductPrice = {
  createdAt: Date;
  customer?: Customer;
  id: string;
  product?: Product;
  specialPrice: number;
  updatedAt: Date;
};
