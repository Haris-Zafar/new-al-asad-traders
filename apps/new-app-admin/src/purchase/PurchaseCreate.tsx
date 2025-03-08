import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { DemandListTitle } from "../demandList/DemandListTitle";
import { PurchaseItemTitle } from "../purchaseItem/PurchaseItemTitle";
import { SupplierPaymentTitle } from "../supplierPayment/SupplierPaymentTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const PurchaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="demandList.id"
          reference="DemandList"
          label="Demand List"
        >
          <SelectInput optionText={DemandListTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="items" reference="PurchaseItem">
          <SelectArrayInput
            optionText={PurchaseItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="Paid Amount" source="paidAmount" />
        <ReferenceArrayInput source="payments" reference="SupplierPayment">
          <SelectArrayInput
            optionText={SupplierPaymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Purchase Number" source="purchaseNumber" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <NumberInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};
