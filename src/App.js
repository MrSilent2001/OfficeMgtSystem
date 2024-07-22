import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import AttendanceMgt from "./pages/Admin View/EmployeeMgt";
import OrderControlling from "./pages/Admin View/orderControlling";
import SalesMgt from "./pages/Admin View/SalesMgt";
import LoginPage from "./pages/loginPage";
import AccountsHandling from "./pages/Admin View/AccountsHandling";
import InventoryManagement from "./pages/Admin View/inventoryManagement";
import PaymentMgt from "./pages/Admin View/paymentMgt";
import ReportGeneration from "./pages/Admin View/ReportGeneration";

function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/employee-mgt" element={<AttendanceMgt />} />
        <Route path="/accounts-handling" element={<AccountsHandling />} />
        <Route path="/order-controlling" element={<OrderControlling />} />
        <Route path="/sales-mgt" element={<SalesMgt />} />
        <Route path="/finance-wage-mgt" element={<PaymentMgt />} />
        <Route path="/finance-inventory-mgt" element={<InventoryManagement />} />
        <Route path="/finance-reports" element={<ReportGeneration />} />

    </Routes>
  );
}

export default App;
