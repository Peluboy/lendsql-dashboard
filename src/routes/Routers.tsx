import { Routes, Route, Navigate } from "react-router-dom";
import AuditLogs from "../pages/AuditLogs";
import Decicion from "../pages/Decision";
import FeesAndCharges from "../pages/FeesAndCharges";
import FeesAndPricing from "../pages/FeesAndPricing";
import Guarantors from "../pages/Guarantors";
import Karma from "../pages/Karma";
import LoanProducts from "../pages/LoanProducts";
import LoanRequest from "../pages/LoanRequest";
import Loans from "../pages/Loans";
import Logout from "../pages/Logout";
import Organisation from "../pages/Organisation";
import Preferences from "../pages/Preferences";
import Reports from "../pages/Reports";
import Savings from "../pages/Savings";
import SavingsProducts from "../pages/SavingsProducts";
import ServiceAccount from "../pages/ServiceAccount";
import Services from "../pages/Services";
import Settlements from "../pages/Settlements";
import SystemMessages from "../pages/SystemMessages";
import Transaction from "../pages/Transaction";
import Users from "../pages/Users";
import WhiteList from "../pages/WhiteList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="/audit-logs" element={<AuditLogs />} />
      <Route path="/decision" element={<Decicion />} />
      <Route path="/fees-and-charges" element={<FeesAndCharges />} />
      <Route path="/fees-and-pricing" element={<FeesAndPricing />} />
      <Route path="/guarantors" element={<Guarantors />} />
      <Route path="/karma" element={<Karma />} />
      <Route path="/loan-products" element={<LoanProducts />} />
      <Route path="/loan-request" element={<LoanRequest />} />
      <Route path="/loans" element={<Loans />} />
      <Route path="/log-out" element={<Logout />} />
      <Route path="/organisation" element={<Organisation />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/savings-products" element={<SavingsProducts />} />
      <Route path="/service-account" element={<ServiceAccount />} />
      <Route path="/services" element={<Services />} />
      <Route path="/settlements" element={<Settlements />} />
      <Route path="/system-messages" element={<SystemMessages />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/users" element={<Users />} />
      <Route path="/white-list" element={<WhiteList />} />
    </Routes>
  );
};

export default Routers;
