import { ProductUpdateManyWithoutCompaniesInput } from "./ProductUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  contactPerson?: string | null;
  email?: string | null;
  name?: string;
  phone?: string | null;
  products?: ProductUpdateManyWithoutCompaniesInput;
};
