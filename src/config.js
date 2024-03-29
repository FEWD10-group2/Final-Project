import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello Sir/Madam, how may I assist you?`, {}),
  ],
};

export default config;
