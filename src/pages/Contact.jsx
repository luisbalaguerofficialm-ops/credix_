import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../util/axiosClient";
import {
  Headphones,
  Landmark,
  MessageCircle,
  Search,
  MapPin,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import imqq from "../assets/ima.jpg";
import map from "../assets/map.jpg";
import { Link } from "react-router-dom";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.subject || !form.message) {
      return toast.error("Please complete all fields.");
    }

    try {
      setLoading(true);

      const { data } = await axiosClient.post("/api/support/contact", form);

      toast.success(data.message || "Message sent successfully.");

      setForm({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-[#eef5f8] text-[#0f172a] min-h-screen">
        {/* Hero */}
        <section className="relative h-[400px]">
          <img alt="" className="w-full h-full" src={imqq} />

          <div className="absolute inset-0" />
        </section>
        {/* Contact Cards */}
        <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Support */}
            <div className="bg-white rounded-lg p-8 text-center shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <Headphones />
              </div>

              <h3 className="text-2xl font-semibold mb-3">Customer Support</h3>

              <p className="text-gray-600 mb-6">
                General account inquiries and banking support.
              </p>

              <p className="font-bold text-lg">1-800-555-0199</p>

              <p className="text-sm text-gray-500">Mon–Fri: 8am – 8pm EST</p>
            </div>

            {/* Loans */}
            <div className="bg-white rounded-lg p-8 text-center shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Landmark />
              </div>

              <h3 className="text-2xl font-semibold mb-3">Loans & Credit</h3>

              <p className="text-gray-600 mb-6">
                Mortgages, personal loans, and credit card applications.
              </p>

              <p className="font-bold text-lg">1-800-555-0188</p>

              <p className="text-sm text-gray-500">Mon–Sat: 9am – 6pm EST</p>
            </div>

            {/* Chat */}
            <div className="bg-[#005b7f] text-white rounded-lg p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle />
              </div>

              <h3 className="text-2xl font-semibold mb-3">Live Chat</h3>

              <p className="mb-6">
                Chat with a representative in real-time for immediate
                assistance.
              </p>

              <Link
                to="/new-account"
                className="bg-[#7aa000] px-6 py-3 rounded-lg font-semibold"
              >
                Start Chat Now
              </Link>
            </div>
          </div>
        </section>
        {/* Form + Branch */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold mb-3">Send us a message</h2>

              <p className="mb-8 text-gray-600">
                Have a specific question? Fill out the form below and our team
                will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    onChange={handleChange}
                    value={form.fullName}
                    className="border p-3 rounded-lg w-full"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="border p-3 rounded-lg w-full"
                  />
                </div>

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                >
                  <option className="text-gray-50" value="">
                    select below
                  </option>

                  <option value="Loans">Loans</option>

                  <option value="Fraud Report">Fraud Report</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full border p-3 rounded-lg"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#003d66] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Branch Finder */}
            <div className="bg-[#dfeef4] rounded-lg p-8">
              <div className="flex justify-between mb-6">
                <h2 className="text-3xl font-bold">Find a Branch</h2>

                <button className="flex gap-2 items-center">
                  <MapPin size={18} />
                  Use my location
                </button>
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-4 top-3.5" size={18} />

                {/* <input
                type="text"
                placeholder="Enter zip code or city"
                className="w-full pl-12 p-3 rounded-lg border"
              /> */}
              </div>

              <img
                src={map}
                alt=""
                className="rounded-lg h-72 w-full object-cover"
              />

              <div className="bg-white p-4 rounded-lg mt-4 border">
                <h4 className="font-bold">Main Street Branch</h4>

                <p className="text-gray-600">123 Financial Way, Suite 100</p>

                <p className="text-green-600 font-semibold text-sm">
                  Open Now • Closes at 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Emergency */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="bg-white border border-red-200 rounded-xl p-8 flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="text-red-600" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Emergency Services</h3>

                <p className="text-gray-600">
                  Lost your card or suspect fraudulent activity? We're available
                  24/7.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="text-gray-600 px-6 py-3">
                Call 24/7 Hotline
              </button>

              <button className="px-6 py-3 rounded-lg">
                Lock Your Card Online
              </button>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-[#083b4c] text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Credit Union</h3>

              <p className="text-white/70 mb-6">
                Providing secure, reliable, and accessible banking solutions.
              </p>

              {/* <div className="flex gap-4">
              <Twitter />
            </div> */}
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Release</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Banking Services</h4>
              <ul className="space-y-3">
                <li>Savings Accounts</li>
                <li>Checking Accounts</li>
                <li>Online Banking</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>Contact Support</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 py-6 text-center text-white/60">
            Copyright © 2026 America Bank. All rights reserved.
          </div>
        </footer>
        {/* Floating Chat Button */}
        <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#7aa000] text-white shadow-xl flex items-center justify-center">
          <MessageCircle />
        </button>
      </div>
    </>
  );
}
