import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DEMANDLISTITEM_TITLE_FIELD } from "../demandListItem/DemandListItemTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { SUPPLIERPRODUCT_TITLE_FIELD } from "../supplierProduct/SupplierProductTitle";

export const PurchaseItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Demand List Item"
          source="demandlistitem.id"
          reference="DemandListItem"
        >
          <TextField source={DEMANDLISTITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
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
      </SimpleShowLayout>
    </Show>
  );
};
