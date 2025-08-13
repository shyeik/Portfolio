import { useState } from "react";

export default function FAQChatbot() {
  const faq = [
    {
      q: "What is your development stack?",
      a: "I use MongoDB, Express, React, and Node.js for full-stack development.",
    },
    {
      q: "Do you offer freelance services?",
      a: "Yes, I work on freelance projects. You can contact me via email or LinkedIn.",
    },
    {
      q: "Where can I see your projects?",
      a: "You can explore my projects in the portfolio section of this website.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleQuestionClick = (question, answer) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: question },
      { sender: "bot", text: answer },
    ]);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-[#87c17f] text-white p-4 outline-1 outline-green-300 rounded-full shadow-md shadow-green-600 hover:bg-[#6fae6b] transition-colors"
      >
        <img
          src="https://www.svgrepo.com/download/415337/radio-communication-interaction.svg"
          alt="Radio communication icon"
          className="w-6 h-6"
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-lg border rounded-lg flex flex-col">
          <div className="bg-[#87c17f] text-white font-mono p-3 rounded-t-lg">
            <strong>FAQ Chatbot</strong>
          </div>

          {/* Questions */}
          <div className=" border-b max-h-32 overflow-y-auto ">
            {faq.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(item.q, item.a)}
                className="block text-[#0e3818] w-full text-left font-mono text-sm p-2 border-b hover:bg-gray-100"
              >
                {item.q}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="p-3 flex-1 font-mono overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex items-center gap-2 ${
                  msg.sender === "user" ? "text-[#0e3818]" : "text-green-600"
                }`}
              >
                {msg.sender === "user" ? (
                  <img
                    src="https://www.svgrepo.com/download/415337/radio-communication-interaction.svg"
                    alt="Radio icon"
                    className="w-4 h-4"
                  />
                ) : msg.sender === "bot" ? (
                  <strong className="text-green-600">:</strong>
                ) : (
                  <strong></strong>
                )}
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
