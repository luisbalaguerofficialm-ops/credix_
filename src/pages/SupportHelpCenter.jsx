import React from "react";
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

export default function SupportHelpCenter() {
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
                  <a
                    className="flex items-center text-sm font-semibold text-[#00516f] hover:underline"
                    href="#"
                  >
                    View Articles <ChevronRight className="w-4 h-4 ml-0.5" />
                  </a>
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
                  <a
                    className="flex items-center text-sm font-semibold text-[#00516f] hover:underline"
                    href="#"
                  >
                    View Articles <ChevronRight className="w-4 h-4 ml-0.5" />
                  </a>
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
                  <a
                    className="flex items-center text-sm font-semibold text-[#00516f] hover:underline"
                    href="#"
                  >
                    View Articles <ChevronRight className="w-4 h-4 ml-0.5" />
                  </a>
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
                  <a
                    className="flex items-center text-sm font-semibold text-[#00516f] hover:underline"
                    href="#"
                  >
                    View Articles <ChevronRight className="w-4 h-4 ml-0.5" />
                  </a>
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
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      alt="Sarah from Apex Support"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#c9f081] rounded-full border-2 border-[#00516f]"></span>
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight">Sarah</p>
                    <p className="text-xs text-white/80">Chat with us </p>
                  </div>
                </div>
              </div>

              {/* */}
              <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-[#f3faff]/40">
                <div className="flex justify-center">
                  <span className="text-xs text-[#70787f] px-3 py-1 bg-[#e5f6ff] rounded-full font-medium">
                    Today
                  </span>
                </div>

                {/* */}
                <div className="flex gap-2 max-w-[85%]">
                  <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-[#e5f6ff]">
                    <p className="text-sm text-[#40484e]">
                      Hello! I'm Sarah. How can I help you with your account
                      today?
                    </p>
                  </div>
                </div>
                <div className="text-[10px] text-[#70787f] pl-1 -mt-3">
                  10:24 AM
                </div>

                {/* */}
                <div className="flex justify-end w-full">
                  <div className="max-w-[85%] flex flex-col items-end gap-1">
                    <div className="bg-[#00516f] text-white p-3 rounded-xl rounded-tr-none shadow-sm">
                      <p className="text-sm">
                        I'm having trouble viewing my recent mortgage statement.
                      </p>
                    </div>
                    <span className="text-[10px] text-[#70787f] pr-1">
                      10:25 AM
                    </span>
                  </div>
                </div>

                {/* */}
                <div className="flex gap-2 max-w-[85%] flex-col">
                  <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-[#bfc8cf]">
                    <p className="text-sm text-[#40484e]">
                      I can certainly help with that. Could you please confirm
                      the last 4 digits of your account number?
                    </p>
                  </div>
                  <span className="text-[10px] text-[#70787f] pl-1">
                    10:25 AM
                  </span>
                </div>

                {/* */}
                <div className="flex items-center gap-2 text-[#70787f] text-xs pl-1">
                  <span className="italic">Sarah is typing</span>
                  <span className="flex gap-0.5 mt-1">
                    <span className="w-1 h-1 bg-[#70787f] rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-[#70787f] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 bg-[#70787f] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>

              {/* */}
              <div className="p-3 bg-white border-t border-[#bfc8cf]">
                <div className="relative">
                  <input
                    className="w-full pl-4 pr-10 py-2.5 rounded-full bg-[#f3faff] border border-[#bfc8cf] focus:outline-none focus:ring-1 focus:ring-[#00516f] text-sm"
                    placeholder="Type your message..."
                    type="text"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00516f] hover:opacity-80 flex items-center">
                    <Send className="w-4 h-4" />
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
