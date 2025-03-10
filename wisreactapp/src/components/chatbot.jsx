import React, { useState } from "react";
import { IoChatbubblesOutline, IoClose } from "react-icons/io5"; // Import icons

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Track if the chat is open

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await fetch("http://127.0.0.1:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.answer };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div className="chatbot-container">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button className="chatbot-icon" onClick={() => setIsOpen(true)}>
          <IoChatbubblesOutline size={30} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <IoClose size={20} />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <strong>{msg.sender === "user" ? "You" : "Bot"}: </strong>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
