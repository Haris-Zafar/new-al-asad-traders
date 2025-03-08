import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { CustomerProductPriceTitle } from "../customerProductPrice/CustomerProductPriceTitle";
import { DemandListItemTitle } from "../demandListItem/DemandListItemTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { PurchaseItemTitle } from "../purchaseItem/PurchaseItemTitle";
import { SupplierProductTitle } from "../supplierProduct/SupplierProductTitle";
import { TagsOnProductTitle } from "../tagsOnProduct/TagsOnProductTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="customerPrices"
          reference="CustomerProductPrice"
        >
          <SelectArrayInput
            optionText={CustomerProductPriceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="demandListItem" reference="DemandListItem">
          <SelectArrayInput
            optionText={DemandListItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <DateTimeInput label="Expiry Date" source="expiryDate" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="orderItems" reference="OrderItem">
          <SelectArrayInput
            optionText={OrderItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="purchaseItem" reference="PurchaseItem">
          <SelectArrayInput
            optionText={PurchaseItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Purchase Price" source="purchasePrice" />
        <NumberInput step={1} label="Reorder Level" source="reorderLevel" />
        <NumberInput label="Retail Price" source="retailPrice" />
        <NumberInput label="Sell Price" source="sellPrice" />
        <TextInput label="Size" source="size" />
        <TextInput label="Sku" source="sku" />
        <NumberInput step={1} label="Stock Quantity" source="stockQuantity" />
        <ReferenceArrayInput
          source="supplierProducts"
          reference="SupplierProduct"
        >
          <SelectArrayInput
            optionText={SupplierProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="tags" reference="TagsOnProduct">
          <SelectArrayInput
            optionText={TagsOnProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Weight" source="weight" />
        <SelectInput
          source="weightUnit"
          label="Weight Unit"
          choices={[
            { label: "G", value: "G" },
            { label: "ML", value: "ML" },
            { label: "KG", value: "KG" },
            { label: "L", value: "L" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
