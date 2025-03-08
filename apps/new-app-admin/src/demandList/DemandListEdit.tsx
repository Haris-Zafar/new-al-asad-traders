import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DemandListItemTitle } from "../demandListItem/DemandListItemTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const DemandListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Estimated Cost" source="estimatedCost" />
        <ReferenceArrayInput source="items" reference="DemandListItem">
          <SelectArrayInput
            optionText={DemandListItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="purchase.id"
          reference="Purchase"
          label="Purchase"
        >
          <SelectInput optionText={PurchaseTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "DRAFT", value: "DRAFT" },
            { label: "SUBMITTED", value: "SUBMITTED" },
            { label: "CONFIRMED", value: "CONFIRMED" },
            { label: "PARTIAL", value: "PARTIAL" },
            { label: "COMPLETE", value: "COMPLETE" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
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
