import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { PurchaseItemTitle } from "../purchaseItem/PurchaseItemTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const SupplierProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Availability" source="availability" />
        <DateTimeInput label="Last Purchase Date" source="lastPurchaseDate" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="purchaseItems" reference="PurchaseItem">
          <SelectArrayInput
            optionText={PurchaseItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Purchase Price" source="purchasePrice" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <TextInput label="Supplier Sku" source="supplierSku" />
      </SimpleForm>
    </Edit>
  );
};
