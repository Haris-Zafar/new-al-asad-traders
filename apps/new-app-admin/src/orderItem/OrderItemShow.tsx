import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DEMANDLIST_TITLE_FIELD } from "../demandList/DemandListTitle";
import { ORDERITEM_TITLE_FIELD } from "./OrderItemTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASEITEM_TITLE_FIELD } from "../purchaseItem/PurchaseItemTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const OrderItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fulfilled Quantity" source="fulfilledQuantity" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <TextField label="Sell Price" source="sellPrice" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DemandListItem"
          target="orderItemId"
          label="DemandListItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Confirmed Quantity" source="confirmedQuantity" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Demand List"
              source="demandlist.id"
              reference="DemandList"
            >
              <TextField source={DEMANDLIST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Order Item"
              source="orderitem.id"
              reference="OrderItem"
            >
              <TextField source={ORDERITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Purchase Item"
              source="purchaseitem.id"
              reference="PurchaseItem"
            >
              <TextField source={PURCHASEITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Requested Quantity" source="requestedQuantity" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
