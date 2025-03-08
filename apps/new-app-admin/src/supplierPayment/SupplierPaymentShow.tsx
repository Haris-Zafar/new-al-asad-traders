import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const SupplierPaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <DateField source="paymentDate" label="Payment Date" />
        <TextField label="Payment Method" source="paymentMethod" />
        <ReferenceField
          label="Purchase"
          source="purchase.id"
          reference="Purchase"
        >
          <TextField source={PURCHASE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Reference" source="reference" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
