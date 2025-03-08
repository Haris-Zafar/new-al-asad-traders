import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { TagsOnProductList } from "./tagsOnProduct/TagsOnProductList";
import { TagsOnProductCreate } from "./tagsOnProduct/TagsOnProductCreate";
import { TagsOnProductEdit } from "./tagsOnProduct/TagsOnProductEdit";
import { TagsOnProductShow } from "./tagsOnProduct/TagsOnProductShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { SupplierProductList } from "./supplierProduct/SupplierProductList";
import { SupplierProductCreate } from "./supplierProduct/SupplierProductCreate";
import { SupplierProductEdit } from "./supplierProduct/SupplierProductEdit";
import { SupplierProductShow } from "./supplierProduct/SupplierProductShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { CustomerProductPriceList } from "./customerProductPrice/CustomerProductPriceList";
import { CustomerProductPriceCreate } from "./customerProductPrice/CustomerProductPriceCreate";
import { CustomerProductPriceEdit } from "./customerProductPrice/CustomerProductPriceEdit";
import { CustomerProductPriceShow } from "./customerProductPrice/CustomerProductPriceShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { DemandListList } from "./demandList/DemandListList";
import { DemandListCreate } from "./demandList/DemandListCreate";
import { DemandListEdit } from "./demandList/DemandListEdit";
import { DemandListShow } from "./demandList/DemandListShow";
import { DemandListItemList } from "./demandListItem/DemandListItemList";
import { DemandListItemCreate } from "./demandListItem/DemandListItemCreate";
import { DemandListItemEdit } from "./demandListItem/DemandListItemEdit";
import { DemandListItemShow } from "./demandListItem/DemandListItemShow";
import { PurchaseList } from "./purchase/PurchaseList";
import { PurchaseCreate } from "./purchase/PurchaseCreate";
import { PurchaseEdit } from "./purchase/PurchaseEdit";
import { PurchaseShow } from "./purchase/PurchaseShow";
import { PurchaseItemList } from "./purchaseItem/PurchaseItemList";
import { PurchaseItemCreate } from "./purchaseItem/PurchaseItemCreate";
import { PurchaseItemEdit } from "./purchaseItem/PurchaseItemEdit";
import { PurchaseItemShow } from "./purchaseItem/PurchaseItemShow";
import { SupplierPaymentList } from "./supplierPayment/SupplierPaymentList";
import { SupplierPaymentCreate } from "./supplierPayment/SupplierPaymentCreate";
import { SupplierPaymentEdit } from "./supplierPayment/SupplierPaymentEdit";
import { SupplierPaymentShow } from "./supplierPayment/SupplierPaymentShow";
import { CustomerPaymentList } from "./customerPayment/CustomerPaymentList";
import { CustomerPaymentCreate } from "./customerPayment/CustomerPaymentCreate";
import { CustomerPaymentEdit } from "./customerPayment/CustomerPaymentEdit";
import { CustomerPaymentShow } from "./customerPayment/CustomerPaymentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"New App"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
        <Resource
          name="TagsOnProduct"
          list={TagsOnProductList}
          edit={TagsOnProductEdit}
          create={TagsOnProductCreate}
          show={TagsOnProductShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="SupplierProduct"
          list={SupplierProductList}
          edit={SupplierProductEdit}
          create={SupplierProductCreate}
          show={SupplierProductShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="CustomerProductPrice"
          list={CustomerProductPriceList}
          edit={CustomerProductPriceEdit}
          create={CustomerProductPriceCreate}
          show={CustomerProductPriceShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="DemandList"
          list={DemandListList}
          edit={DemandListEdit}
          create={DemandListCreate}
          show={DemandListShow}
        />
        <Resource
          name="DemandListItem"
          list={DemandListItemList}
          edit={DemandListItemEdit}
          create={DemandListItemCreate}
          show={DemandListItemShow}
        />
        <Resource
          name="Purchase"
          list={PurchaseList}
          edit={PurchaseEdit}
          create={PurchaseCreate}
          show={PurchaseShow}
        />
        <Resource
          name="PurchaseItem"
          list={PurchaseItemList}
          edit={PurchaseItemEdit}
          create={PurchaseItemCreate}
          show={PurchaseItemShow}
        />
        <Resource
          name="SupplierPayment"
          list={SupplierPaymentList}
          edit={SupplierPaymentEdit}
          create={SupplierPaymentCreate}
          show={SupplierPaymentShow}
        />
        <Resource
          name="CustomerPayment"
          list={CustomerPaymentList}
          edit={CustomerPaymentEdit}
          create={CustomerPaymentCreate}
          show={CustomerPaymentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
