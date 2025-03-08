import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { DemandListItemTitle } from "../demandListItem/DemandListItemTitle";
import { ProductTitle } from "../product/ProductTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { SupplierProductTitle } from "../supplierProduct/SupplierProductTitle";

export const PurchaseItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="demandListItem.id"
          reference="DemandListItem"
          label="Demand List Item"
        >
          <SelectInput optionText={DemandListItemTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchase.id"
          reference="Purchase"
          label="Purchase"
        >
          <SelectInput optionText={PurchaseTitle} />
        </ReferenceInput>
        <NumberInput label="Purchase Price" source="purchasePrice" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput
          source="supplierProduct.id"
          reference="SupplierProduct"
          label="Supplier Product"
        >
          <SelectInput optionText={SupplierProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
