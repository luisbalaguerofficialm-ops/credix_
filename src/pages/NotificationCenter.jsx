import React, { useEffect, useState } from "react";
import {
  Inbox,
  Shield,
  FileText,
  Bell,
  User,
  Lock,
  Smartphone,
  RefreshCw,
  Sliders,
  CheckCircle2,
  MoreVertical,
  CreditCard,
  Laptop,
  Wallet,
  Sparkles,
  CheckSquare,
  Trash2,
  Delete,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../util/axiosClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NotificationCenter() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [markingAll, setMarkingAll] = useState(false);
  const [markingOne, setMarkingOne] = useState(null);

  const [counts, setCounts] = useState({
    all: 0,
    security: 0,
    transaction: 0,
    system: 0,
  });

  const getNotifications = async (category = "all") => {
    try {
      setLoading(true);

      const params = {};

      if (category !== "all") {
        params.category = category;
      }

      const { data } = await axiosClient.get("/api/notifications", { params });

      setNotifications(data.notifications);
      setCounts(data.counts);
      setUnreadCount(data.unreadCount);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotifications(activeCategory);
  }, [activeCategory]);

  // Make single notification read use your route
  const markAsRead = async (id) => {
    try {
      setMarkingOne(id);

      const { data } = await axiosClient.patch(`/api/notifications/${id}/read`);

      toast.success(data.message || "Notification marked as read");

      getNotifications(activeCategory);
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to mark notification");
    } finally {
      setMarkingOne(null);
    }
  };
  // ==============mark  all one as read
  const markAllRead = async () => {
    try {
      setMarkingAll(true);

      const { data } = await axiosClient.patch("/api/notifications/read-all");

      toast.success(data.message || "All notifications marked as read");

      getNotifications(activeCategory);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to mark notifications as read",
      );
    } finally {
      setMarkingAll(false);
    }
  };
  // Clear All
  const deleteAll = async () => {
    try {
      setClearing(true);

      const { data } = await axiosClient.delete("/api/notifications");

      toast.success(data.message || "Notifications cleared");

      setShowClearModal(false);

      getNotifications(activeCategory);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Unable to clear notifications",
      );
    } finally {
      setClearing(false);
    }
  };

  // Delete Notification
  const deleteNotification = async (id) => {
    try {
      setDeleting(true);

      const { data } = await axiosClient.delete(`/api/notifications/${id}`);

      toast.success(data.message || "Notification deleted");

      setShowDeleteModal(false);
      setSelectedNotification(null);

      getNotifications(activeCategory);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to delete notification",
      );
    } finally {
      setDeleting(false);
    }
  };

  const borderColors = {
    security: "border-red-500",
    transaction: "border-blue-500",
    system: "border-green-500",
  };

  const getNotificationIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "security":
        return <Lock className="w-5 h-5" />;

      case "transaction":
        return <CreditCard className="w-5 h-5" />;

      case "system":
        return <Sparkles className="w-5 h-5" />;

      default:
        return <Bell className="w-5 h-5" />;
    }
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <div className="bg-[#f4f9fc] min-h-screen text-left font-sans text-[#1c2024] antialiased">
        {/* --- Global Header Navigation --- */}

        {/* --- Main Workspace Wrapper --- */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* --- Section Header Row --- */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#00212f] tracking-tight">
                Notification Center
              </h1>

              <p className="text-sm text-gray-500">
                {unreadCount} unread notifications
              </p>
              <p className="text-[#54626d] text-sm mt-3">
                Stay updated with your account activity, security alerts, and
                the latest updates from Meridian.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
              <button
                onClick={markAllRead}
                disabled={markingAll}
                className="px-4 py-2 border border-[#00516f] text-[#00516f] font-semibold text-xs uppercase tracking-wider rounded bg-white hover:bg-[#e6f4fa] transition-colors flex items-center gap-2 disabled:opacity-60"
              >
                {markingAll ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    <CheckSquare className="w-4 h-4" />
                    Mark all as read
                  </>
                )}
              </button>
              <button
                onClick={() => setShowClearModal(true)}
                className="px-4 py-2 text-[#54626d] hover:text-[#00212f] font-semibold text-xs uppercase tracking-wider rounded flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
                Clear all
              </button>
            </div>
          </div>

          {/* --- Layout Context Split --- */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* --- Navigation Categories Workspace --- */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-[#e2eaf1] p-4 shadow-sm">
                <h2 className="text-[11px] font-bold text-[#54626d] uppercase tracking-wider mb-3 px-1">
                  Categories
                </h2>
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all text-left ${
                      activeCategory === "all"
                        ? "bg-[#e3f4fc] text-[#003b54]"
                        : "text-[#54626d] hover:bg-[#f4f9fc]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Inbox className="w-4 h-4" />
                      <span>All Notifications</span>
                    </div>

                    <span className="bg-[#003b54] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {counts.all}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory("security")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all text-left ${
                      activeCategory === "security"
                        ? "bg-[#e3f4fc] text-[#003b54]"
                        : "text-[#54626d] hover:bg-[#f4f9fc]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-[#54626d]" />
                      <span>Security</span>
                    </div>
                    <span className="bg-[#ba1a1a] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {counts.security}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory("transaction")}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[#54626d] hover:bg-[#f4f9fc] rounded-lg text-sm transition-all text-left"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-[#54626d]" />
                      <span>Transaction</span>
                    </div>
                    <span className="text-[#1c2024] font-bold text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                      {counts.transaction}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveCategory("system")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all text-left ${
                      activeCategory === "system"
                        ? "bg-[#e3f4fc] text-[#003b54]"
                        : "text-[#54626d] hover:bg-[#f4f9fc]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-[#54626d]" />
                      <span>System</span>
                    </div>
                    <span className="text-[#1c2024] font-bold text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                      {counts.system}
                    </span>
                  </button>
                </nav>
              </div>
            </div>

            {/* --- Interactive Notifications List Workspace --- */}
            <div className="lg:col-span-3 space-y-8">
              {/* --- Today Segment --- */}
              <div>
                <div className="space-y-3">
                  {loading ? (
                    <div className="py-20 text-center">
                      Loading.....
                    </div>
                  ) : notifications.length === 0 ? (
                    <div className="py-20 text-center text-gray-500">
                      No notifications found.
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification._id}
                        className={`
    border-l-4
    ${borderColors[notification.category?.toLowerCase()] || "border-gray-300"}
    ${notification.read ? "bg-white opacity-80" : "bg-[#eef7fc]"}
    p-4 rounded-r-xl shadow-sm flex gap-4 items-start relative group
  `}
                      >
                        <div className="bg-[#ffdad6] text-[#ba1a1a] p-2 rounded-lg shrink-0 flex items-center justify-center">
                          {getNotificationIcon(notification.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1 gap-2">
                            <h4
                              className={`text-sm flex items-center gap-2 ${
                                notification.read
                                  ? "font-medium text-gray-500"
                                  : "font-bold text-[#00212f]"
                              }`}
                            >
                              {notification.title}
                              {!notification.read && (
                                <span className="w-2 h-2 bg-[#00668b] rounded-full shrink-0"></span>
                              )}
                            </h4>
                            <span className="text-xs text-[#707e8a] whitespace-nowrap">
                              {new Date(
                                notification.createdAt,
                              ).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-[#3a4852] leading-relaxed">
                            {notification.message}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 md:mt-0 mt-5 shrink-0">
                          {/* Mark as Read */}
                          {!notification.read && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                markAsRead(notification._id);
                              }}
                              disabled={markingOne === notification._id}
                              className="p-1 rounded-full hover:bg-gray-400 disabled:opacity-60"
                              title="Mark as Read"
                            >
                              {markingOne === notification._id ? (
                                <RefreshCw className="w-5 h-5 animate-spin text-[#00668b]" />
                              ) : (
                                <CheckSquare className="w-5 h-5 text-[#00668b]" />
                              )}
                            </button>
                          )}

                          {/* Delete */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedNotification(notification._id);
                              setShowDeleteModal(true);
                            }}
                            className="text-[#a33232] hover:text-[#00212f] p-1 rounded-full hover:bg-gray-200/50"
                            title="Delete Notification"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* --- Pagination Trigger Area --- */}
              <div className="pt-4">
                <button
                  onClick={handleBack}
                  className="text-[#54626d] hover:text-[#00212f] hover:border-[#00212f] p-1 rounded-full hover:bg-gray-200/50 w-20 border"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* --- Promotional Pitch Split Section --- */}
        <section className="bg-[#1c3541] text-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative max-w-[280px] sm:max-w-[320px] aspect-[9/19] rounded-[40px] border-[8px] border-[#2d4957] overflow-hidden bg-[#152832] shadow-2xl">
                {/* Internal Mock Graphic Elements for the Smartphone Device */}
                <div className="p-4 space-y-4 pt-8">
                  <div className="h-4 w-16 bg-[#2d4957] rounded mx-auto mb-6"></div>
                  <div className="h-8 w-full bg-[#2d4957] rounded-lg"></div>
                  <div className="h-28 w-full bg-[#2d4957] rounded-xl"></div>
                  <div className="h-36 w-full bg-[#2d4957] rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Take Control of Your Security
                </h2>
                <p className="text-[#b2c8d4] text-base leading-relaxed">
                  Customize your alert preferences to receive real-time
                  notifications about logins, large transactions, and profile
                  updates. Your safety is our priority.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-white/10 p-2.5 rounded-xl text-[#c4df9b] shrink-0 flex items-center justify-center">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Biometric Authentication
                    </h4>
                    <p className="text-[#b2c8d4] text-xs mt-1">
                      Enable FaceID or Fingerprint login for an extra layer of
                      security on mobile.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-white/10 p-2.5 rounded-xl text-[#c4df9b] shrink-0 flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Custom Spending Alerts
                    </h4>
                    <p className="text-[#b2c8d4] text-xs mt-1">
                      Set thresholds for transactions to get instantly notified
                      on your phone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Footer Base Global Segment --- */}
        <footer className="bg-[#152832] text-[#b2c8d4] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-lg font-bold text-white tracking-tight">
                Credit Union
              </span>
              <p className="text-xs leading-relaxed max-w-sm">
                A reliable financial partner helping individuals and businesses
                grow through innovative banking solutions and security-first
                technology.
              </p>
              <div className="flex gap-3 pt-2">
                <span className="w-5 h-5 bg-white/10 rounded-full inline-block"></span>
                <span className="w-5 h-5 bg-white/10 rounded-full inline-block"></span>
                <span className="w-5 h-5 bg-white/10 rounded-full inline-block"></span>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h5 className="text-[11px] font-bold text-[#c4df9b] uppercase tracking-wider">
                  Resources
                </h5>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Security Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-[11px] font-bold text-[#c4df9b] uppercase tracking-wider">
                  Support
                </h5>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Branch Locator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Legal Disclosures
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#112028] py-6 px-4 sm:px-6 lg:px-8 text-center md:text-left border-t border-white/5">
            <p className="max-w-7xl mx-auto text-[11px] text-[#708590]">
              © 2026 Credit Union. Member NCUA. Equal Housing Lender.
            </p>
          </div>
        </footer>
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Trash2 className="h-8 w-8 text-red-600" />
                </div>
              </div>

              <h2 className="mt-5 text-center text-2xl font-bold">
                Delete Notification?
              </h2>

              <p className="mt-3 text-center text-sm text-gray-600">
                Are you sure you want to delete this notification?
                <br />
                This action cannot be undone.
              </p>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setSelectedNotification(null);
                  }}
                  disabled={deleting}
                  className="flex-1 rounded-xl border py-3"
                >
                  Cancel
                </button>

                <button
                  onClick={() => deleteNotification(selectedNotification)}
                  disabled={deleting}
                  className="flex-1 rounded-xl bg-red-600 py-3 text-white"
                >
                  {deleting ? (
                    <span className="flex justify-center items-center gap-2">
                      <RefreshCw className="w-7 h-7 animate-spin" />
                    </span>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
        {/* ===============================Clear All Confirmation Modal========================= */}
        {showClearModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Trash2 className="h-8 w-8 text-red-600" />
                </div>
              </div>

              <h2 className="mt-5 text-center text-2xl font-bold">
                Clear All Notifications?
              </h2>

              <p className="mt-3 text-center text-sm text-gray-600">
                Are you sure you want to permanently delete all notifications?
                <br />
                This action cannot be undone.
              </p>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setShowClearModal(false)}
                  disabled={clearing}
                  className="flex-1 rounded-xl border py-3"
                >
                  Cancel
                </button>

                <button
                  onClick={deleteAll}
                  disabled={clearing}
                  className="flex-1 rounded-xl bg-red-600 py-3 text-white"
                >
                  {clearing ? (
                    <span className="flex justify-center items-center gap-2">
                      <RefreshCw className="w-7 h-7 animate-spin" />
                    </span>
                  ) : (
                    "Clear All"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
