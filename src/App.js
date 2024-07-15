import './App.css';
import AdminDashboard from "./pages/adminDashboard";
import {Route, Routes} from "react-router-dom";
import AttendanceMgt from "./pages/attendanceMgt";
import EmployeeHandling from "./pages/employeeHandling";
import SupplierHandling from "./pages/supplierHandling";
import OrderControlling from "./pages/orderControlling";
import InventoryControlling from "./pages/inventoryControlling";
import WageMgt from "./pages/wageMgt";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/attendance-mgt" element={<AttendanceMgt />} />
        <Route path="/employee-handling" element={<EmployeeHandling />} />
        <Route path="/supplier-handling" element={<SupplierHandling />} />
        <Route path="/order-controlling" element={<OrderControlling />} />
        <Route path="/inventory-controlling" element={<InventoryControlling />} />
        <Route path="/wage-mgt" element={<WageMgt />} />
    </Routes>
  );
}

export default App;
