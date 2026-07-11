import React, { useEffect, useState, useRef } from "react";
import axiosClient from "../util/axiosClient";
import { toast } from "react-toastify";
import {
  Search,
  User,
  CreditCard,
  ShieldAlert,
  ArrowLeftRight,
  Info,
  X,
  ChevronRight,
  Send,
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router";

export default function SupportHelpCenter() {
  const bottomRef = useRef(null);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    initializeChat();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axiosClient.get("/api/auth/me");
      setUser(data.user);
    };

    getUser();
  }, []);

  const initializeChat = async () => {
    try {
      let response;

      try {
        response = await axiosClient.get("/api/support/conversation");
      } catch {
        response = await axiosClient.post("/api/support/conversation");
      }

      setConversation(response.data.conversation);

      loadMessages(response.data.conversation._id);
    } catch (err) {
      toast.error("Unable to load support.");
    }
  };

  // LOAD MESSAGES
  const loadMessages = async (conversationId) => {
    try {
      const { data } = await axiosClient.get(
        `/api/support/messages/${conversationId}`,
      );

      setMessages(data.messages);

      await axiosClient.patch("/api/support/messages/read");
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      setLoading(true);

      await axiosClient.post("/api/support/message", {
        conversationId: conversation._id,
        message: newMessage,
      });

      setNewMessage("");

      loadMessages(conversation._id);
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to send.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f3faff] text-[#001f29] font-sans flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#001f29] mb-6">
                Browse help topics{" "}
                <br className="text-xl font-bold text-[#4f21ce] mb-6" /> GO Live
                Chat With Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* */}
                <div className="p-6 bg-white rounded-xl border border-[#bfc8cf] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#e5f6ff] flex items-center justify-center text-[#00516f] mb-4">
                      <User className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#001f29]">
                      Account Access
                    </h3>
                    <p className="text-sm text-[#40484e] mb-6 leading-relaxed">
                      Manage your login credentials, multi-factor
                      authentication, and profile settings.
                    </p>
                  </div>
                  <Link
                    to="/profile-settings"
                    className="flex items-center text-sm font-semibold text-[#00516f] hover:underline"
                    href="#"
                  >
                    View Articles <ChevronRight className="w-4 h-4 ml-0.5" />
                  </Link>
                </div>

                {/* */}
                <div className="p-6 bg-white rounded-xl border border-[#bfc8cf] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#e5f6ff] flex items-center justify-center text-[#00516f] mb-4">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#001f29]">
                      Cards & Payments
                    </h3>
                    <p className="text-sm text-[#40484e] mb-6 leading-relaxed">
                      Debit/Credit card activation, travel notices, and
                      automatic bill pay management.
                    </p>
                  </div>
                  {/* <a
                    className="flex items-center text-sm font-semibold text-[#00516f] hover:underline"
                    href="#"
                  >
                    View Articles <ChevronRight className="w-4 h-4 ml-0.5" />
                  </a> */}
                </div>

                {/* */}
                <div className="p-6 bg-white rounded-xl border border-[#bfc8cf] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#e5f6ff] flex items-center justify-center text-red-600 mb-4">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#001f29]">
                      Security & Fraud
                    </h3>
                    <p className="text-sm text-[#40484e] mb-6 leading-relaxed">
                      Report suspicious activity, learn about phishing, and
                      protect your digital assets.
                    </p>
                  </div>
                  <p className="flex items-center text-sm font-semibold text-[#00516f] hover:underline">
                    Chat With Us
                  </p>
                </div>

                {/* */}
                <div className="p-6 bg-white rounded-xl border border-[#bfc8cf] hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#e5f6ff] flex items-center justify-center text-[#00516f] mb-4">
                      <ArrowLeftRight className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#001f29]">
                      Transfers
                    </h3>
                    <p className="text-sm text-[#40484e] mb-6 leading-relaxed">
                      Domestic and international wire transfers, Zelle®
                      payments, and scheduled transfers.
                    </p>
                  </div>
                  <Link
                    to="/first-step-transfer"
                    className="flex items-center text-sm font-semibold text-[#00516f] hover:underline"
                    href="#"
                  >
                    View Articles <ChevronRight className="w-4 h-4 ml-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* */}
            <div className="mt-8 p-5 bg-[#e5f6ff] rounded-xl border-l-4 border-[#00516f]">
              <div className="flex gap-4">
                <Info className="text-[#00516f] w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#00516f] mb-1">
                    Service Alert
                  </h4>
                  <p className="text-sm text-[#40484e] leading-relaxed">
                    Scheduled maintenance will occur on Sunday, October 27th
                    from 2:00 AM to 4:00 AM EST. Online banking may be
                    temporarily unavailable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-xl border border-[#bfc8cf] overflow-hidden shadow-lg flex flex-col h-[520px]">
              {/* */}
              <div className="bg-[#00516f] p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3 ">
                  <div className="relative">
                    <img
                      className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                      src={
                        user?.profileImage ||
                        user?.image ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.fullName || "User",
                        )}`
                      }
                      alt={user?.fullName}
                    />
                    <span className="text-green-400">Online</span>
                    <span className="absolute bottom-7 right-0 w-3 h-3 bg-[#81f08a] rounded-full border-2 border-[#00516f]"></span>
                  </div>

                  <div>
                    <p className="font-bold text-sm leading-tight">
                      {user?.fullName}
                    </p>
                    <p className="text-xs text-white/80">Chat with us </p>
                  </div>
                </div>
              </div>

              <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-[#f3faff]/40">
                <div className="flex justify-center">
                  <span className="text-xs text-[#70787f] px-3 py-1 bg-[#e5f6ff] rounded-full font-medium">
                    Today
                  </span>
                </div>

                {messages.map((msg) => {
                  const isSupport = msg.sender === "Support";

                  return (
                    <div key={msg._id}>
                      {isSupport ? (
                        <div className="flex flex-col items-start">
                          <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-[#e5f6ff] max-w-[85%]">
                            <p className="text-sm text-[#40484e]">
                              {msg.message}
                            </p>
                          </div>

                          <span className="text-[10px] text-[#70787f] mt-1 ml-1">
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <div className="max-w-[85%] flex flex-col items-end">
                            <div className="bg-[#00516f] text-white p-3 rounded-xl rounded-tr-none shadow-sm">
                              <p className="text-sm">{msg.message}</p>
                            </div>

                            <span className="text-[10px] text-[#70787f] mt-1">
                              {new Date(msg.createdAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {loading && (
                  <div className="flex items-center gap-2 text-[#70787f] text-xs">
                    <span>Sending...</span>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* */}
              <div className="p-3 bg-white border-t border-[#bfc8cf]">
                <div className="relative">
                  <input
                    type="text"
                    value={newMessage}
                    placeholder="Type your message..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    className="w-full pl-4 pr-12 py-2.5 rounded-full bg-[#f3faff] border border-[#bfc8cf] focus:outline-none focus:ring-1 focus:ring-[#00516f] text-sm"
                  />

                  <button
                    type="button"
                    disabled={loading || !newMessage.trim()}
                    onClick={sendMessage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00516f] disabled:opacity-40"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
        {/* */}
        <section className="bg-white py-16 border-t border-[#bfc8cf]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-3 text-[#001f29]">
              Still need assistance?
            </h2>
            <p className="text-[#40484e] max-w-xl mx-auto mb-12 text-sm">
              Our dedicated support team is available 24/7 to help you with any
              questions or concerns you may have.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#e5f6ff] flex items-center justify-center text-[#00516f] mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm mb-1 text-[#001f29]">
                  Call Us
                </h4>
                <p className="text-sm font-semibold text-[#40484e]">
                  1-800-Credit-BANK
                </p>
                <p className="text-xs text-[#70787f] mt-1">
                  Available 24/7 for urgent matters
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#e5f6ff] flex items-center justify-center text-[#00516f] mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm mb-1 text-[#001f29]">
                  Email Support
                </h4>
                <p className="text-sm font-semibold text-[#40484e]">
                  support@credixa.co
                </p>
                <p className="text-xs text-[#70787f] mt-1">
                  Response within 24 hours
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#e5f6ff] flex items-center justify-center text-[#00516f] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm mb-1 text-[#001f29]">
                  Visit a Branch
                </h4>
                <p className="text-sm font-semibold text-[#00516f] underline cursor-pointer">
                  Find a location near you
                </p>
                <p className="text-xs text-[#70787f] mt-1">
                  Over 500 branches nationwide
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
