import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { CustomerPaymentTitle } from "../customerPayment/CustomerPaymentTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Advance Payment" source="advancePayment" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Due Date" source="dueDate" />
        <DateTimeInput label="Fulfillment Date" source="fulfillmentDate" />
        <ReferenceArrayInput source="items" reference="OrderItem">
          <SelectArrayInput
            optionText={OrderItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Order Number" source="orderNumber" />
        <NumberInput label="Paid Amount" source="paidAmount" />
        <ReferenceArrayInput source="payments" reference="CustomerPayment">
          <SelectArrayInput
            optionText={CustomerPaymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "PARTIAL", value: "PARTIAL" },
            { label: "COMPLETE", value: "COMPLETE" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
