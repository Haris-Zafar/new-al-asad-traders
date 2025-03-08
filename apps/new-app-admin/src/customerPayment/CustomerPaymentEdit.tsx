import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { OrderTitle } from "../order/OrderTitle";

export const CustomerPaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Notes" source="notes" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
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
        <TextInput label="Reference" source="reference" />
      </SimpleForm>
    </Edit>
  );
};
