import React from "react";
import { Plus, X } from "lucide-react";

const ChooseCard = ({
  onClose,
  savedCards,
  setSelectedCard,
  showAddCardForm,
  setShowAddCardForm,
  newCard,
  setNewCard,
  handleAddNewCard,
}) => {
  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50"
      style={{ pointerEvents: "auto" }}
    >
      <div className="bg-white h-80 w-full max-w-md rounded-xl p-6 shadow-2xl relative">
        <div className=" flex flex-col gap-7 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              {showAddCardForm ? "Add New Card" : "Select a Card"}
            </h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          {/* Select Card */}
          {!showAddCardForm && (
            <>
              {savedCards?.length > 0 ? (
                savedCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => {
                      setSelectedCard(card);
                      onClose();
                    }}
                    className="w-full border rounded-lg px-4 py-3 mb-2 text-left hover:bg-gray-100"
                  >
                    {card.type} {card.number}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500 mb-3">No saved cards yet</p>
              )}

              <button
                onClick={() => setShowAddCardForm(true)}
                className="w-full border rounded-lg px-4 py-3 flex items-center justify-center gap-2 text-[#007C92]"
              >
                <Plus /> Add New Card
              </button>
            </>
          )}

          {/* Add Card */}
          {showAddCardForm && (
            <>
              <input
                placeholder="Card Number"
                value={newCard.number}
                onChange={(e) =>
                  setNewCard({ ...newCard, number: e.target.value })
                }
                className="w-full border rounded-lg p-2 mb-2"
              />
              <input
                placeholder="Cardholder Name"
                value={newCard.name}
                onChange={(e) =>
                  setNewCard({ ...newCard, name: e.target.value })
                }
                className="w-full border rounded-lg p-2 mb-2"
              />
              <div className="flex gap-2 mb-3">
                <input
                  placeholder="MM/YY"
                  value={newCard.expiry}
                  onChange={(e) =>
                    setNewCard({ ...newCard, expiry: e.target.value })
                  }
                  className="flex-1 border rounded-lg p-2"
                />
                <input
                  placeholder="CVV"
                  value={newCard.cvv}
                  onChange={(e) =>
                    setNewCard({ ...newCard, cvv: e.target.value })
                  }
                  className="flex-1 border rounded-lg p-2"
                />
              </div>

              <button
                onClick={handleAddNewCard}
                className="w-full bg-[#007C92] text-white py-3 rounded-lg"
              >
                Add Card
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
