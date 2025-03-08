import { ProductCreateNestedManyWithoutCompaniesInput } from "./ProductCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  contactPerson?: string | null;
  email?: string | null;
  name: string;
  phone?: string | null;
  products?: ProductCreateNestedManyWithoutCompaniesInput;
};
