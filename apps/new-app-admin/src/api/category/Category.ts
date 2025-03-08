import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  products?: Array<Product>;
  updatedAt: Date;
};
