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
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Contact Person" source="contactPerson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Outstanding Balance" source="outstandingBalance" />
        <TextField label="Phone" source="phone" />
        <TextField label="Total Purchases" source="totalPurchases" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CustomerProductPrice"
          target="customerId"
          label="CustomerProductPrices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Special Price" source="specialPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="customerId"
          label="Orders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Advance Payment" source="advancePayment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Due Date" source="dueDate" />
            <TextField label="Fulfillment Date" source="fulfillmentDate" />
            <TextField label="ID" source="id" />
            <DateField source="orderDate" label="Order Date" />
            <TextField label="Order Number" source="orderNumber" />
            <TextField label="Paid Amount" source="paidAmount" />
            <TextField label="Status" source="status" />
            <TextField label="Total Amount" source="totalAmount" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerPayment"
          target="customerId"
          label="CustomerPayments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="paymentDate" label="Payment Date" />
            <TextField label="Payment Method" source="paymentMethod" />
            <TextField label="Reference" source="reference" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
