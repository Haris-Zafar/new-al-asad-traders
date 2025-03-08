import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEMANDLIST_TITLE_FIELD } from "../demandList/DemandListTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const PurchaseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Purchases"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Demand List"
          source="demandlist.id"
          reference="DemandList"
        >
          <TextField source={DEMANDLIST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Paid Amount" source="paidAmount" />
        <DateField source="purchaseDate" label="Purchase Date" />
        <TextField label="Purchase Number" source="purchaseNumber" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total Amount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
