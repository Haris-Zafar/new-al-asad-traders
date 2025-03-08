import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DEMANDLISTITEM_TITLE_FIELD } from "../demandListItem/DemandListItemTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { SUPPLIERPRODUCT_TITLE_FIELD } from "./SupplierProductTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const SupplierProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Availability" source="availability" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Last Purchase Date" source="lastPurchaseDate" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Purchase Price" source="purchasePrice" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Supplier Sku" source="supplierSku" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PurchaseItem"
          target="supplierProductId"
          label="PurchaseItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Demand List Item"
              source="demandlistitem.id"
              reference="DemandListItem"
            >
              <TextField source={DEMANDLISTITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Purchase"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Purchase Price" source="purchasePrice" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="Supplier Product"
              source="supplierproduct.id"
              reference="SupplierProduct"
            >
              <TextField source={SUPPLIERPRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
