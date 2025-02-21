import React, { useState } from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const Chatbot = () => {
  console.log("Chatbot component is rendering!"); // Debugging statement

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className="container">
      {/* Chatbot Button */}
      <div className="chatbox__button">
        <button onClick={toggleChatbox}>
          Click Me {/* Simple button for testing */}
        </button>
      </div>

      {/* Chatbox */}
      {isChatboxOpen && (
        <div className="chatbox">
          <div className="chatbox__support">
            <div className="chatbox__header">
              <div className="chatbox__image--header">
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="Chatbot"
                />
              </div>
              <div className="chatbox__content--header">
                <h4 className="chatbox__heading--header">Chat Support</h4>
                <p className="chatbox__description--header">
                  Hi, I'm the Women in Science Chatbot! How can I help you?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Render the Chatbot component into the root div
ReactDOM.render(<Chatbot />, document.getElementById("root"));