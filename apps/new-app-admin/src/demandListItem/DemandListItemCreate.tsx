import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DemandListTitle } from "../demandList/DemandListTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { ProductTitle } from "../product/ProductTitle";
import { PurchaseItemTitle } from "../purchaseItem/PurchaseItemTitle";

export const DemandListItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Confirmed Quantity"
          source="confirmedQuantity"
        />
        <ReferenceInput
          source="demandList.id"
          reference="DemandList"
          label="Demand List"
        >
          <SelectInput optionText={DemandListTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="orderItem.id"
          reference="OrderItem"
          label="Order Item"
        >
          <SelectInput optionText={OrderItemTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchaseItem.id"
          reference="PurchaseItem"
          label="Purchase Item"
        >
          <SelectInput optionText={PurchaseItemTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Requested Quantity"
          source="requestedQuantity"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "CONFIRMED", value: "CONFIRMED" },
            { label: "UNAVAILABLE", value: "UNAVAILABLE" },
            { label: "TRANSFERRED", value: "TRANSFERRED" },
            { label: "PURCHASED", value: "PURCHASED" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
