import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CustomerProductPriceTitle } from "../customerProductPrice/CustomerProductPriceTitle";
import { OrderTitle } from "../order/OrderTitle";
import { CustomerPaymentTitle } from "../customerPayment/CustomerPaymentTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Contact Person" source="contactPerson" />
        <ReferenceArrayInput
          source="customPrices"
          reference="CustomerProductPrice"
        >
          <SelectArrayInput
            optionText={CustomerProductPriceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Outstanding Balance" source="outstandingBalance" />
        <ReferenceArrayInput source="payments" reference="CustomerPayment">
          <SelectArrayInput
            optionText={CustomerPaymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <NumberInput label="Total Purchases" source="totalPurchases" />
      </SimpleForm>
    </Edit>
  );
};
