import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DEMANDLISTITEM_TITLE_FIELD } from "../demandListItem/DemandListItemTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASE_TITLE_FIELD } from "./PurchaseTitle";
import { SUPPLIERPRODUCT_TITLE_FIELD } from "../supplierProduct/SupplierProductTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { DEMANDLIST_TITLE_FIELD } from "../demandList/DemandListTitle";

export const PurchaseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Demand List"
          source="demandlist.id"
          reference="DemandList"
        >
          <TextField source={DEMANDLIST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Paid Amount" source="paidAmount" />
        <DateField source="purchaseDate" label="Purchase Date" />
        <TextField label="Purchase Number" source="purchaseNumber" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total Amount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PurchaseItem"
          target="purchaseId"
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
        <ReferenceManyField
          reference="SupplierPayment"
          target="purchaseId"
          label="SupplierPayments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <DateField source="paymentDate" label="Payment Date" />
            <TextField label="Payment Method" source="paymentMethod" />
            <ReferenceField
              label="Purchase"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reference" source="reference" />
            <ReferenceField
              label="Supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
