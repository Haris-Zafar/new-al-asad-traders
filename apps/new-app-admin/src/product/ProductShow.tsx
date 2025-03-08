import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { DEMANDLIST_TITLE_FIELD } from "../demandList/DemandListTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";
import { PURCHASEITEM_TITLE_FIELD } from "../purchaseItem/PurchaseItemTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { DEMANDLISTITEM_TITLE_FIELD } from "../demandListItem/DemandListItemTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { SUPPLIERPRODUCT_TITLE_FIELD } from "../supplierProduct/SupplierProductTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Expiry Date" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Purchase Price" source="purchasePrice" />
        <TextField label="Reorder Level" source="reorderLevel" />
        <TextField label="Retail Price" source="retailPrice" />
        <TextField label="Sell Price" source="sellPrice" />
        <TextField label="Size" source="size" />
        <TextField label="Sku" source="sku" />
        <TextField label="Stock Quantity" source="stockQuantity" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Weight" source="weight" />
        <TextField label="Weight Unit" source="weightUnit" />
        <ReferenceManyField
          reference="CustomerProductPrice"
          target="productId"
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
          reference="DemandListItem"
          target="productId"
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
        <ReferenceManyField
          reference="OrderItem"
          target="productId"
          label="OrderItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fulfilled Quantity" source="fulfilledQuantity" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Sell Price" source="sellPrice" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PurchaseItem"
          target="productId"
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
          reference="SupplierProduct"
          target="productId"
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
        <ReferenceManyField
          reference="TagsOnProduct"
          target="productId"
          label="TagsOnProducts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
