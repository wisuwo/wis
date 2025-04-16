import React, { useState, useEffect } from "react";
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Farewell phrases to trigger auto-close
  const farewellPhrases = ["bye", "goodbye", "see you later", "see ya", "farewell"];

  // Close chat and clear messages
  const handleCloseChat = () => {
    setMessages([]);
    setIsOpen(false);
  };

  // Auto-close if the user says a farewell phrase and the bot responds
  useEffect(() => {
    if (messages.length === 0) return;

    const lastUserMessage = messages[messages.length - 2]?.text?.toLowerCase();
    const lastBotMessage = messages[messages.length - 1]?.text?.toLowerCase();

    // Check if the user's last message matches any farewell phrase
    const userSaidGoodbye = farewellPhrases.some(phrase => 
      lastUserMessage?.includes(phrase)
    );

    if (userSaidGoodbye && lastBotMessage) {
      const timer = setTimeout(() => {
        handleCloseChat(); // Close after 5 seconds
      }, 5000);

      return () => clearTimeout(timer); // Cleanup
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await fetch("https://chatbot-backend-fcwu.onrender.com", {
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
      {!isOpen && (
        <button className="chatbot-icon" onClick={() => setIsOpen(true)}>
          <IoChatbubblesOutline size={30} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button className="close-btn" onClick={handleCloseChat}>
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
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
