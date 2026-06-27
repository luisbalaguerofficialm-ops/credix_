import React, { useState, useEffect } from "react";
import axiosClient from "../util/axiosClient";
import { toast } from "react-toastify";
import { Banknote, CreditCard, Plus } from "lucide-react";
import ChooseCard from "../components/modals/ChooseCard";

export default function AddMoney() {
  // ================= UI STATES =================
  const [activeTab, setActiveTab] = useState("bank");
  const [amount, setAmount] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [bankLoading, setBankLoading] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);

  // ================= BANK =================
  const [fundingRequests, setFundingRequests] = useState([]);

  // ================= CARD =================
  const [showCardModal, setShowCardModal] = useState(false);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [savedCards, setSavedCards] = useState([]);
  const [newCard, setNewCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const fetchWalletBalance = async () => {
    try {
      const res = await axiosClient.get("/api/wallet");
      setWalletBalance(res.data.balance || 0);
    } catch {
      toast.error("Failed to load wallet balance");
    }
  };

  const fetchCards = async () => {
    try {
      const res = await axiosClient.get("/api/wallet/cards");
      setSavedCards(res.data.cards || []);
    } catch {
      toast.error("Failed to load cards");
    }
  };

  const fetchFundingRequests = async () => {
    try {
      const res = await axiosClient.get("/api/funding-request/me");
      setFundingRequests(res.data.requests || []);
    } catch (err) {
      toast.error("Failed to load funding requests");
    }
  };

  useEffect(() => {
    fetchWalletBalance();
    fetchCards();
    fetchFundingRequests();
  }, []);

  // ================= BANK =================
  const handleBankFundingRequest = async () => {
    if (!amount) return toast.error("Please enter amount");

    try {
      setBankLoading(true);

      await axiosClient.post("/api/funding-request", { amount });

      toast.success("Funding request sent. Awaiting approval");
      setAmount("");
      fetchFundingRequests();
    } catch {
      toast.error("Failed to send funding request");
    } finally {
      setBankLoading(false);
    }
  };

  const statusStyle = (status) => {
    if (status === "pending") return "bg-yellow-100 text-yellow-700";
    if (status === "approved") return "bg-green-100 text-green-700";
    if (status === "rejected") return "bg-red-100 text-red-700";
    return "";
  };

  // ================= CARD =================
  const handleAddNewCard = async () => {
    try {
      const res = await axiosClient.post(`/api/wallet/card`, newCard);
      setSavedCards([...savedCards, res.data.card]);
      setSelectedCard(res.data.card);
      setShowCardModal(false);
      setShowAddCardForm(false);
      setNewCard({ number: "", name: "", expiry: "", cvv: "" });
      toast.success("Card added successfully");
    } catch {
      toast.error("Failed to add card");
    }
  };

  const handleAddMoney = async () => {
    if (!amount || !selectedCard?.id)
      return toast.error("Enter amount and select card");

    try {
      await axiosClient.post(`/api/wallet/add`, {
        amount,
        cardId: selectedCard.id,
      });
      toast.success("Wallet funded successfully");
      setAmount("");
      setSelectedCard(null);
      fetchWalletBalance();
    } catch (err) {
      toast.error("Failed to fund wallet");
    }
  };

  // ================= UI =================
  return (
    <div className="flex bg-gray-300 min-h-screen justify-center items-center  p-4 md:p-29">
      <div className="h-20"></div>
      <main className="flex-1 md:mb-7 p-6 lg:p-14 bg-white rounded-lg shadow-md max-w-3xl w-full">
        <div className="text-center mb-8">
          <span className="font-medium">Wallet Balance: </span>
          <span className="font-bold text-[#007C92]">
            ${walletBalance.toLocaleString()}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab("bank")}
            className={`px-7 py-3 rounded-lg h-9 border flex items-center gap-2 ${
              activeTab === "bank" ? "bg-[#007C92] text-white" : "bg-gray-300"
            }`}
          >
            <Banknote className="inline mr-2" />
            Bank Transfer
          </button>
          <button
            onClick={() => setActiveTab("card")}
            className={`p-4 rounded-lg h-9 flex w-25 border text-center items-center gap-2 ${
              activeTab === "card" ? "bg-[#007C92] text-white" : "bg-gray-300"
            }`}
          >
            <CreditCard className="inline mr-2" />
            Card
          </button>
        </div>

        {/* BANK */}
        {activeTab === "bank" && (
          <div className="flex flex-col mt-6 items-center">
            <div className="p-8 rounded-2xl w-full max-w-md space-y-6">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-lg">
                  Request the amount you want to be approve
                </h3>

                <input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#007C92] outline-none"
                />

                <button
                  onClick={handleBankFundingRequest}
                  disabled={bankLoading}
                  className="w-full bg-[#007C92] text-white py-3 h-10 rounded-lg hover:bg-[#006a7c] transition disabled:opacity-60"
                >
                  {bankLoading ? "Sending..." : "Send Funding Request"}
                </button>

                {/* Requests List */}
                <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                  {fundingRequests.map((req) => (
                    <div
                      key={req._id}
                      className="flex justify-between items-center border border-gray-200 p-3 rounded-lg bg-gray-50"
                    >
                      <span className="font-medium">
                        ${req.amount.toLocaleString()}
                      </span>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle(
                          req.status,
                        )}`}
                      >
                        {req.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CARD */}
        {activeTab === "card" && (
          <div className="flex flex-col min-h-83 items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full sm:w-[600px] mx-auto flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg">Add Money via Card</h3>
                <input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#007C92] outline-none"
                />
              </div>
              {/* Quick Select */}
              <div className="flex flex-col gap-3">
                <label className="block text-[#000000] text-lg font-medium mb-2">
                  Quick Select
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
                  {[500, 1000, 5000, 10000, 150000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`border border-gray-300 rounded-lg w-full sm:w-[100px] h-10 py-2 hover:bg-[#E6F9F5] hover:text-[#007C92] font-medium ${
                        amount == amt ? "bg-[#007C92] text-white" : ""
                      }`}
                    >
                      ${amt.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowCardModal(true)}
                className="w-full h-10 border border-gray-300 rounded-lg p-2 flex justify-between items-center cursor-pointer text-left"
              >
                {selectedCard
                  ? `${selectedCard.type} ${selectedCard.number}`
                  : "Choose Card"}
                <Plus />
              </button>

              <button
                onClick={handleAddMoney}
                disabled={cardLoading}
                className="w-full h-11 bg-[#006A91] text-white rounded-lg hover:bg-[#265668] transition disabled:opacity-60"
              >
                {cardLoading ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
          </div>
        )}

        {showCardModal && (
          <ChooseCard
            onClose={() => setShowCardModal(false)}
            savedCards={savedCards}
            setSelectedCard={setSelectedCard}
            showAddCardForm={showAddCardForm}
            setShowAddCardForm={setShowAddCardForm}
            newCard={newCard}
            setNewCard={setNewCard}
            handleAddNewCard={handleAddNewCard}
          />
        )}
      </main>
    </div>
  );
}
