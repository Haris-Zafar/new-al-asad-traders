import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { SUPPLIER_TITLE_FIELD } from "./SupplierTitle";
import { DEMANDLIST_TITLE_FIELD } from "../demandList/DemandListTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const SupplierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Contact Person" source="contactPerson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Reliability Score" source="reliabilityScore" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DemandList"
          target="supplierId"
          label="DemandLists"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <DateField source="demandDate" label="Demand Date" />
            <TextField label="Estimated Cost" source="estimatedCost" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Purchase"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
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
        <ReferenceManyField
          reference="SupplierPayment"
          target="supplierId"
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
        <ReferenceManyField
          reference="Purchase"
          target="supplierId"
          label="Purchases"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SupplierProduct"
          target="supplierId"
          label="SupplierProducts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Availability" source="availability" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Last Purchase Date" source="lastPurchaseDate" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
