import './App.css';
import React from 'react';
import AdminDashboard from "./pages/Admin View/adminDashboard";
import {Route, Routes} from "react-router-dom";
import AttendanceMgt from "./pages/Admin View/EmployeeMgt";
import OrderControlling from "./pages/Admin View/orderControlling";
import SalesMgt from "./pages/Admin View/SalesMgt";
import LoginPage from "./pages/loginPage";
import AccountsHandling from "./pages/Admin View/AccountsHandling";
import HRAccountsHandling from "./pages/HR View/HRAccountsHandling";
import HRSalesMgt from "./pages/HR View/HRSalesMgt";
import HROrderControlling from "./pages/HR View/HROrderControlling";
import FinanceAccountsHandling from "./pages/Finance View/Finance-AccountsHandling";
import FinanceOrderControlling from "./pages/Finance View/Finance-orderControlling";
import FinanceSalesMgt from "./pages/Finance View/Finance-SalesMgt";
import InventoryManagement from "./pages/Finance View/inventoryManagement";
import PaymentMgt from "./pages/Finance View/paymentMgt";

function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/employee-mgt" element={<AttendanceMgt />} />
        <Route path="/accounts-handling" element={<AccountsHandling />} />
        <Route path="/order-controlling" element={<OrderControlling />} />
        <Route path="/sales-mgt" element={<SalesMgt />} />


        <Route path="/hr-dashboard" element={<HRAccountsHandling />} />
        <Route path="/hr-order-controlling" element={<HROrderControlling />} />
        <Route path="/hr-sales-mgt" element={<HRSalesMgt />} />

        <Route path="/finance-dashboard" element={<FinanceAccountsHandling />} />
        <Route path="/finance-order-controlling" element={<FinanceOrderControlling />} />
        <Route path="/finance-sales-mgt" element={<FinanceSalesMgt />} />
        <Route path="/finance-wage-mgt" element={<PaymentMgt />} />
        <Route path="/finance-inventory-mgt" element={<InventoryManagement />} />
    </Routes>
  );
}

export default App;
