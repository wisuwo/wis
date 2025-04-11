import React, { useState, useEffect } from "react"; // Add useEffect
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Close chat and clear messages
  const handleCloseChat = () => {
    setMessages([]);
    setIsOpen(false);
  };

  // Auto-close if the last message is a bot response to "bye"
  useEffect(() => {
    if (messages.length === 0) return;

    const lastUserMessage = messages[messages.length - 2]?.text?.toLowerCase();
    const lastBotMessage = messages[messages.length - 1]?.text?.toLowerCase();

    // Check if the user said "bye" and the bot responded
    if (
      lastUserMessage?.includes("bye") &&
      lastBotMessage // Bot replied to "bye"
    ) {
      const timer = setTimeout(() => {
        handleCloseChat(); // Close after a delay (5 seconds)
      }, 5000); // Adjust delay as needed

      return () => clearTimeout(timer); // Cleanup
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await fetch("https://chatbot-backend-az4e.onrender.com/predict", {
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