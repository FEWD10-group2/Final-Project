import React, { useState, useEffect } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./App.css";

function App() {
  const [showBot, toggleBot] = useState(false);
  const [messageHistory, setMessageHistory] = useState([]);

  useEffect(() => {
    const messages = localStorage.getItem("chat_messages");
    if (messages) {
      setMessageHistory(JSON.parse(messages));
    }
  }, []);

  const saveMessages = (messages, HTMLString) => {
    try {
      localStorage.setItem("chat_messages", JSON.stringify(messages));
    } catch (error) {
      console.error("Failed to save messages:", error);
    }
  };
  const handleToggleBot = () => {
    toggleBot(!showBot);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="toggle-bot-btn"
          onClick={handleToggleBot}
          aria-label={showBot ? "Close chatbot" : "Open chatbot"}
        >
          {showBot ? "🔽" : "💬"}
        </button>
        {showBot && (
          <div
            className={
              "chatbot-container " + (showBot ? "fade-in" : "fade-out")
            }
          >
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              messageHistory={messageHistory}
              saveMessages={saveMessages}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
