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

import { DEMANDLIST_TITLE_FIELD } from "./DemandListTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASEITEM_TITLE_FIELD } from "../purchaseItem/PurchaseItemTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const DemandListShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DemandListItem"
          target="demandListId"
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
