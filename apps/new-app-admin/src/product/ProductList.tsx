import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Weight Unit" source="weightUnit" />{" "}
      </Datagrid>
    </List>
  );
};
