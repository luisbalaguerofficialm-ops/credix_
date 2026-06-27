import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import AddMoney from "./pages/AddMoney";
import NewAccountSecond from "./auth/NewAccountSecond";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
// import Notifications from "./pages/Notifications";
import NewAccountThird from "./auth/NewAccountThird";
import Business from "./pages/Business";
import Loans from "./pages/Loans";
import Personal from "./pages/Personal";
import AllTransactionHistory from "./pages/AllTransactionHistory";
import PublicLayout from "./layouts/PublicLayout";
import About from "./pages/About";
import NewAccountForth from "./auth/NewAccountForth";
import CreditDebit from "./pages/CreditDebit";
import UserDashboard from "./pages/UserDashboard";
import PayBills from "./pages/PayBills";
import DepositCheck from "./pages/DepositCheck";
import ProfileAndSettings from "./components/ProfileAndSettings";
import NotificationCenter from "./pages/NotificationCenter";
import TransfarSuccessfully from "./features/TransfarSuccessfully";
import TransactionPinUpdated from "./features/TransactionPinUpdated";
import PasswordUpdatedSuccessfully from "./features/PasswordUpdatedSuccessfully";
import ChangePassword from "./auth/ChangePassword";
import FirstSepTransfer from "./pages/FirstSepTransfar";
import SecondSepTransfer from "./pages/SecondSepTransfar";
import ThirdSetTransfer from "./pages/ThirdSetTransfar";
import ChangeTransactionPin from "./auth/ChangeTransactionPin";
import SupportHelpCenter from "./pages/SupportHelpCenter";
import NewAccountFirst from "./auth/NewAccountFirst";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <BrowserRouter>
          <Toaster position="top-right" />

          <Routes>
            {/* Public Routes */}

            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/new-account" element={<NewAccountFirst />} />
              <Route
                path="/account-persional-info"
                element={<NewAccountSecond />}
              />
              <Route path="/new-account-kyc" element={<NewAccountThird />} />
              <Route path="/new-account-Final" element={<NewAccountForth />} />
              <Route path="/about" element={<About />} />
              <Route path="/credit-card" element={<CreditDebit />} />
              <Route path="/business" element={<Business />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/pay-bills" element={<PayBills />} />
              <Route path="/deposit-check" element={<DepositCheck />} />
            </Route>

            {/* Protected Routes - All inside Layout for persistent sidebar */}
            <Route element={<Layout />}>
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/add-money" element={<AddMoney />} />
              {/* <Route path="/notifications" element={<Notifications />} />\{" "} */}
              <Route
                path="/profile-settings"
                element={<ProfileAndSettings />}
              />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route
                path="/notification-center"
                element={<NotificationCenter />}
              />
              <Route
                path="/all-transaction-history"
                element={<AllTransactionHistory />}
              />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route
                path="/change-transaction-pin"
                element={<ChangeTransactionPin />}
              />
              <Route
                path="/transaction-pin-updated"
                element={<TransactionPinUpdated />}
              />
              <Route
                path="/password-updated-successfully"
                element={<PasswordUpdatedSuccessfully />}
              />
              <Route
                path="/transfer-successfully/:transactionId"
                element={<TransfarSuccessfully />}
              />
              <Route
                path="/first-step-transfer"
                element={<FirstSepTransfer />}
              />
              <Route
                path="/second-step-transfer"
                element={<SecondSepTransfer />}
              />
              <Route
                path="/third-set-transfer"
                element={<ThirdSetTransfer />}
              />
              <Route
                path="/support-help-center"
                element={<SupportHelpCenter />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
