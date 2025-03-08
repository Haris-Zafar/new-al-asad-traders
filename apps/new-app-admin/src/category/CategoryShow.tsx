import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="categoryId"
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
