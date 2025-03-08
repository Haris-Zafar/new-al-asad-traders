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

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { COMPANY_TITLE_FIELD } from "./CompanyTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="companyId"
          label="Products"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
