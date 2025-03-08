import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DemandListTitle } from "../demandList/DemandListTitle";
import { SupplierPaymentTitle } from "../supplierPayment/SupplierPaymentTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { SupplierProductTitle } from "../supplierProduct/SupplierProductTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Contact Person" source="contactPerson" />
        <ReferenceArrayInput source="demandLists" reference="DemandList">
          <SelectArrayInput
            optionText={DemandListTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="payments" reference="SupplierPayment">
          <SelectArrayInput
            optionText={SupplierPaymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput source="purchases" reference="Purchase">
          <SelectArrayInput
            optionText={PurchaseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Reliability Score" source="reliabilityScore" />
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
      </SimpleForm>
    </Create>
  );
};
