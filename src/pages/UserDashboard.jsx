import {
  Search,
  Bell,
  User,
  TrendingUp,
  Wallet,
  CreditCard,
  PiggyBank,
  ArrowLeftRight,
  Receipt,
  Camera,
  Coffee,
  ShoppingBag,
  Home,
  Bolt,
  Wifi,
  Car,
  ShieldCheck,
} from "lucide-react";
import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import axiosClient from "../util/axiosClient";
import { AuthContext } from "../context/AuthContext";

export default function UserDashboard() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const socketRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const [balance, setBalance] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [accountNumber, setAccountNumber] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [choosedAccount, setChoosedAccount] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [analyticsTimeframe, setAnalyticsTimeframe] = useState("30days");
  const [analyticsData, setAnalyticsData] = useState([]);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // const unreadCount = notifications.filter((n) => !n.isRead).length;
  const unreadCount = notifications.length;
  /* ================= FETCH DASHBOARD ================= */
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchDashboard = async () => {
      try {
        // 1️⃣ Dashboard (wallet + tx + notifications)
        const dashboardRes = await axiosClient.get(
          `/api/users/dashboard?timeframe=${analyticsTimeframe}`,
        );
        const dashboard = dashboardRes.data;

        setBalance(dashboard.balance || 0);
        setCurrency(dashboard.currency || "$");
        setAccountNumber(dashboard.accountNumber || "");
        setChoosedAccount(dashboard.choosedAccount || "");
        setTransactions(dashboard.transactions || []);
        setNotifications(dashboard.notifications || []);
        setAnalyticsData(dashboard.analytics || []);

        // 2️⃣ User profile (name, kyc, id)
        const profileRes = await axiosClient.get("/api/users/profile");
        setUser(profileRes.data.user);
      } catch (err) {
        console.error("Dashboard error:", err.response?.data || err.message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [navigate]);

  useEffect(() => {
    if (user?._id) {
      const updateAnalytics = async () => {
        try {
          const res = await axiosClient.get(
            `/api/users/dashboard?timeframe=${analyticsTimeframe}`,
          );
          setAnalyticsData(res.data.analytics || []);
        } catch (err) {
          console.error("Failed updating metrics context:", err);
        }
      };
      updateAnalytics();
    }
  }, [analyticsTimeframe]);

  /* ================= SOCKET.IO ================= */
  useEffect(() => {
    if (!user?._id) return;

    const token = localStorage.getItem("accessToken");

    socketRef.current = io("https://api.credixa.co", {
      auth: { token },
      transports: ["websocket"],
    });

    socketRef.current.on("connect", () => {
      console.log("Socket connected");
    });

    socketRef.current.on("walletUpdated", (data) => {
      if (data.userId === user._id) {
        setBalance(data.balance);
        setCurrency(data.currency);
      }
    });

    socketRef.current.on("newNotification", (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [user]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //greeting
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getTransaction = (type) => {
    switch (type) {
      case "Transfer":
        return ArrowLeftRight;

      case "Deposit":
        return Wallet;

      case "Bill Peyment":
        return Receipt;

      case "Card":
        return CreditCard;

      default:
        Transfer;
    }
  };

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await axiosClient.post("/api/auth/logout").catch(() => {});

      socketRef.current?.disconnect();

      localStorage.clear();
      sessionStorage.clear();

      setUser(null);

      navigate("/login", { replace: true });
    } catch (err) {
      console.error(err);
    } finally {
      setLoggingOut(false);
      setShowLogoutModal(false);
    }
  };
  const handelViewNotification = () => {
    navigate("/notification-center");
  };

  const normalizedAccount = (choosedAccount || "").trim().toLowerCase();

  const isChecking = normalizedAccount === "essential checking";
  const isSavings = normalizedAccount === "high-yield savings";

  return (
    <div className="bg-[#f4f9fc] text-[#001e2b] min-h-screen flex flex-col font-sans">
      {/* --- Top Navigation Header --- */}
      <header className="bg-white border-b border-[#e1e9ef] px-1 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#004b6e]">
          {getGreeting()}, {user?.fullName}
        </h1>
        <div className="flex items-center gap-5">
          {/* Notification */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              onMouseEnter={() => setShowNotifications(true)}
              className="relative text-gray-600 hover:text-[#004b6e]"
            >
              <Bell className="w-6 h-6" />

              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-xl border z-50">
                <div className="p-4 border-b border-gray-300 flex justify-between items-center">
                  <h3 className="font-semibold">Notifications</h3>

                  <button
                    onClick={() => navigate("/notification-center")}
                    className="text-[#004b6e] text-sm"
                  >
                    View All
                  </button>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <p className="p-6 text-center text-gray-500">
                      No notifications
                    </p>
                  ) : (
                    notifications.slice(0, 5).map((n) => (
                      <div
                        key={n._id}
                        // onClick={() => navigate("/notification-center")}
                        className="p-4 text-left hover:bg-gray-50 cursor-pointer border-b border-gray-200"
                      >
                        <p className="font-semibold text-[#004b6e]">
                          {n.title}
                        </p>

                        <p className="text-sm text-gray-500">{n.message}</p>

                        <span className="text-xs text-gray-400">{n.date}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* User */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="text-gray-600 hover:text-[#004b6e]"
            >
              <User className="w-6 h-6" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                <button
                  onClick={() => navigate("/profile-settings")}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50"
                >
                  Settings&Profile
                </button>

                <hr className="border-gray-300" />

                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <img
            src={user?.profileImage ? user.profileImage : "/default-avatar.png"}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-gray-200"
          />
        </div>
      </header>

      {/* --- Main Dashboard Body --- */}
      <main className="flex-1 px-1 py-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Section 1: Account Overview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Balance Card */}
          <div className="bg-[#005a78] text-white text-left p-6 rounded-lg shadow-sm relative overflow-hidden flex flex-col justify-between min-h-35">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-75 font-medium">
                Total Balance
              </p>
              <h2 className="text-3xl font-bold mt-1">
                {" "}
                {currency}
                {balance.toLocaleString()}
              </h2>
            </div>
            <p className="text-medium font-medium mt-2">
              {" "}
              Account Number: {accountNumber || "—"}
            </p>
            <div className="flex items-center gap-1 text-sm text-[#a3e635] mt-4 font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>+2.4% vs last month</span>
            </div>
            <div className="absolute right-4 bottom-4 opacity-10">
              <Wallet className="w-18 h-18" />
            </div>
          </div>

          {/* Checking Account Card */}
          <div
            className={`p-6 rounded-lg shadow-sm flex flex-col justify-between min-h-35 border transition-all ${
              isChecking
                ? "bg-[#005a78] text-white border-[#005a78] vibrate"
                : "bg-white text-[#001e2b] border-[#e1e9ef]"
            }`}
          >
            <div className="text-left flex justify-between items-start">
              <div>
                <p
                  className={`text-sm font-medium ${
                    isChecking ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  Checking Account
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  {currency}
                  {balance.toLocaleString()}
                </h2>
              </div>

              <div
                className={`p-2 rounded-lg ${
                  choosedAccount === "Essential Checking"
                    ? "bg-white/20 text-white"
                    : "bg-[#e0f3fe] text-[#005a78]"
                }`}
              >
                <CreditCard className="w-5 h-5" />
              </div>
            </div>

            <div className="flex justify-between text-xs mt-4">
              <span
                className={
                  isChecking
                    ? "text-green-200 font-medium"
                    : "text-[#557a02] font-medium"
                }
              >
                ACTIVE ACCOUNT
              </span>

              <span className="font-mono">
                Account Number: {accountNumber || "—"}
              </span>
            </div>
          </div>

          {/* Savings Account Card */}
          <div
            className={`p-6 rounded-lg shadow-sm flex flex-col justify-between min-h-35 border transition-all ${
              isSavings
                ? "bg-[#005a78] text-white border-[#005a78] vibrate"
                : "bg-white text-[#001e2b] border-[#e1e9ef]"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p
                  className={`text-sm font-medium ${
                    isSavings ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  High-Yield Savings
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  {currency}
                  {balance.toLocaleString()}
                </h2>
              </div>

              <div
                className={`p-2 rounded-lg ${
                  choosedAccount === "High-Yield Savings"
                    ? "bg-white/20 text-white"
                    : "bg-[#e0f3fe] text-[#005a78]"
                }`}
              >
                <PiggyBank className="w-5 h-5" />
              </div>
            </div>

            <div className="flex justify-between text-xs mt-4">
              <span
                className={
                  isSavings
                    ? "text-green-200 font-medium"
                    : "text-[#557a02] font-medium"
                }
              >
                ACTIVE ACCOUNT
              </span>

              <span className="font-mono">
                Account Number: {accountNumber || "—"}
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Quick Actions Section */}
        <section className="bg-[#e9f4fa] border border-[#d2e4f0] p-6 rounded-lg">
          <h3 className="text-4x1 font-extrabold text-[#001e2b] mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/first-step-transfer
              "
              className="flex flex-col items-center justify-center p-5 bg-white border border-[#e1e9ef] rounded-lg hover:border-[#005a78] hover:shadow-sm transition-all group"
            >
              <ArrowLeftRight className="w-6 h-6 text-[#005a78] mb-2" />
              <span className="text-sm font-medium text-gray-700">
                Transfer Funds
              </span>
            </Link>
            {/* <Link
              to="/pay-bills"
              className="flex flex-col items-center justify-center p-5 bg-white border border-[#e1e9ef] rounded-lg hover:border-[#005a78] hover:shadow-sm transition-all group"
            >
              <Receipt className="w-6 h-6 text-[#005a78] mb-2" />
              <span className="text-sm font-medium text-gray-700">
                Pay Bills
              </span>
            </Link> */}
            <Link
              to="/deposit-check"
              className="flex flex-col items-center justify-center p-5 bg-white border border-[#e1e9ef] rounded-lg hover:border-[#005a78] hover:shadow-sm transition-all group"
            >
              <Camera className="w-6 h-6 text-[#005a78] mb-2" />
              <span className="text-sm font-medium text-gray-700">
                Deposit Check
              </span>
            </Link>
            <Link
              to="/support-help-center"
              className="flex flex-col items-center justify-center p-5 bg-white border border-[#e1e9ef] rounded-lg hover:border-[#005a78] hover:shadow-sm transition-all group"
            >
              <CreditCard className="w-6 h-6 text-[#005a78] mb-2" />
              <span className="text-sm font-medium text-gray-700">
                Support Help Center
              </span>
            </Link>
            <Link
              to="/add-money"
              className="flex flex-col items-center justify-center p-5 bg-white border border-[#e1e9ef] rounded-lg hover:border-[#005a78] hover:shadow-sm transition-all group"
            >
              <CreditCard className="w-6 h-6 text-[#005a78] mb-2" />
              <span className="text-sm font-medium text-gray-700">
                Fund Account
              </span>
            </Link>
          </div>
        </section>

        {/* Layout Partition: Left Content and Right Widget Column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {/* Left Block Area: Transactions and Analytics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Transactions Module */}
            <div className="bg-white border border-[#e1e9ef] rounded-lg shadow-sm overflow-hidden">
              <div className="flex justify-between items-center p-5 border-b border-[#e1e9ef]">
                <h3 className="font-bold text-base text-[#001e2b]">
                  Recent Transactions
                </h3>
                <Link
                  to="/all-transaction-history"
                  className="text-[#005a78] text-sm font-semibold hover:underline"
                  href="#all-transactions"
                >
                  View All
                </Link>
              </div>
              <div className="overflow-x-auto">
                {transactions.length === 0 ? (
                  <p className="text-gray-500 text-center py-10">
                    No transactions yet.
                  </p>
                ) : (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#f0f7fc] text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-[#e1e9ef]">
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3">status</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f4f8]">
                      {transactions.map((tx, idx) => {
                        const TxIcon = getTransaction(tx.type);
                        return (
                          <tr
                            key={idx}
                            className="hover:bg-[#fafcfe] transition-colors text-sm"
                          >
                            <td className="px-6 py-4 flex items-center gap-3">
                              <td>
                                <TxIcon className="w-4 h-4" />
                              </td>
                              <span className="font-medium text-[#001e2b]">
                                {tx.type}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-[#004e69]">
                              {tx.description}
                            </td>
                            <td
                              className={`font-medium ${
                                tx.status === "Successful"
                                  ? "text-green-600"
                                  : tx.status === "Pending"
                                    ? "text-yellow-600"
                                    : tx.status === "Processing"
                                      ? "text-[#004e69]"
                                      : tx.status === "Failed"
                                        ? "text-red-600"
                                        : "text-red-600"
                              }`}
                            >
                              {tx.status}
                            </td>
                            <td
                              className={`px-6 test-left py-4  font-semibold ${tx.isNegative ? "text-[#001e2b]" : "text-[#4b8a02]"}`}
                            >
                              {tx.amount}
                            </td>
                            <td className="px-6 py-4 text-[#004e69]">
                              {tx.date}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Spending Analytics Module */}
            <div className="bg-white border border-[#e1e9ef] rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-base text-[#001e2b]">
                  Spending Analytics
                </h3>
                <select
                  value={analyticsTimeframe}
                  onChange={(e) => setAnalyticsTimeframe(e.target.value)}
                  className="bg-[#f0f7fc] text-xs font-medium text-gray-600 border border-[#d2e4f0] rounded-md py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-[#005a78]"
                >
                  <option>Last 1 week</option>
                  <option>Last 1 Months</option>
                </select>
              </div>
              {/* Graphic Chart Container */}
              <div className="h-44 flex items-end gap-3 pt-4 px-2 border-b border-gray-100">
                {analyticsData.length === 0 ? (
                  <div className="w-full text-center text-xs text-gray-400 pb-16">
                    No spending activity recorded
                  </div>
                ) : (
                  analyticsData.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-[#d5edf7] rounded-t-sm hover:bg-[#005a78] transition-all duration-300 cursor-pointer relative group"
                      style={{ height: `${item.percentage}%` }}
                      title={`${item.label}: ${currency}${item.amount.toLocaleString()}`}
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        {currency}
                        {item.amount.toLocaleString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-between mt-3 text-xs text-gray-400 font-medium px-1">
                {analyticsData.map((item, idx) => (
                  <span
                    key={idx}
                    className="flex-1 text-center first:text-left last:text-right"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Information & Marketing Widgets */}
          <div className="space-y-6">
            {/* Side Notifications Block Feed Panel */}
            <section className="bg-white text-left p-5 rounded-2xl shadow-2xs border border-white/40 lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 bg-purple-50 text-purple-600  flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div className="flex md:gap-42 gap-27">
                  <h3 className="text-[#004e69] font-bold text-sm">
                    Notifications
                  </h3>
                  <button
                    onClick={handelViewNotification}
                    className="text-[#004e69] font-bold text-sm hover:underline"
                  >
                    View All
                  </button>
                </div>
              </div>
              {notifications.length === 0 ? (
                <p className="bg-[#004e69] text-white rounded-lg h-12 items-center p-3">
                  {" "}
                  No Notification Yet
                </p>
              ) : (
                <div className="space-y-3">
                  {notifications.map((n) => (
                    <div
                      key={n._id}
                      className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex gap-3"
                    >
                      <div className="w-1.5 h-1.5 mt-1.5 bg-purple-600 rounded-full shrink-0"></div>
                      <div>
                        <p className="font-bold text-xs text-gray-900">
                          {n.title}
                        </p>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                          {n.message}
                        </p>
                        <span className="text-[10px] text-gray-400 font-medium block mt-1.5">
                          {n.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Security Notice Box */}
            <div className="bg-[#123644] text-left text-white p-5 rounded-lg relative overflow-hidden">
              <h4 className="font-bold text-sm mb-1 flex items-center gap-1.5">
                Security Check
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Ensure your two-factor authentication is active to keep your
                account safe from unauthorized access.
              </p>
              <button className="mt-3 text-[#a8e034] text-xs font-bold hover:underline block">
                Check Security Settings
              </button>
              <div className="absolute -bottom-3 -right-3 opacity-5">
                <ShieldCheck className="w-18 h-18" />
              </div>
            </div>

            {/* Micro Marketing Image Unit */}
            <div className="relative rounded-lg overflow-hidden group h-33.75">
              <img
                alt="Dream Home Promotion"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#123644]/90 via-[#123644]/40 to-transparent p-4 flex flex-col justify-end">
                <h4 className="text-white font-bold text-sm">Dream Home?</h4>
                <p className="text-white/80 text-xs">
                  Mortgage rates as low as 5.2%
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- Global Application Footer --- */}
      <footer className="mt-auto bg-[#1a3845] text-white py-6 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-center md:text-left space-y-1">
            <span className="text-sm font-bold tracking-wide">Meridian</span>
            <p className="text-gray-400">
              ©America Bank. Member NCUA. Equal Housing Lender.
            </p>
          </div>
          <div className="flex gap-5 text-gray-300">
            <a className="hover:text-white transition-colors" href="#privacy">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#security">
              Security
            </a>
            <a className="hover:text-white transition-colors" href="#terms">
              Terms of Service
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#disclosures"
            >
              Legal Disclosures
            </a>
          </div>
        </div>
      </footer>
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 8H5a2 2 0 01-2-2V6a2 2 0 012-2h8"
                  />
                </svg>
              </div>
            </div>

            <h2 className="mt-5 text-center text-2xl font-bold text-[#001F2A]">
              Log Out?
            </h2>

            <p className="mt-3 text-center text-sm text-gray-600">
              Are you sure you want to log out of your account? You will need to
              sign in again to access your banking dashboard.
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                disabled={loggingOut}
                className="flex-1 rounded-xl border border-gray-300 bg-white py-3 font-semibold text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-60"
              >
                {loggingOut ? "Logging Out..." : "Log Out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
