import { Product } from "../product/Product";

export type Company = {
  address: string | null;
  contactPerson: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string;
  phone: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
