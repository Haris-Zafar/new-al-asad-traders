import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DEMANDLIST_TITLE_FIELD } from "../demandList/DemandListTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASEITEM_TITLE_FIELD } from "../purchaseItem/PurchaseItemTitle";

export const DemandListItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Product" source="product.id" reference="Product">
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
      </SimpleShowLayout>
    </Show>
  );
};
