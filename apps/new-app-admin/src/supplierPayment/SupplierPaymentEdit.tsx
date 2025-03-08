import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const SupplierPaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Notes" source="notes" />
        <SelectInput
          source="paymentMethod"
          label="Payment Method"
          choices={[
            { label: "CASH", value: "CASH" },
            { label: "BANK_TRANSFER", value: "BANK_TRANSFER" },
            { label: "CHECK", value: "CHECK" },
            { label: "CREDIT", value: "CREDIT" },
            { label: "OTHER", value: "OTHER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="purchase.id"
          reference="Purchase"
          label="Purchase"
        >
          <SelectInput optionText={PurchaseTitle} />
        </ReferenceInput>
        <TextInput label="Reference" source="reference" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
