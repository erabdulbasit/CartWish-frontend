import React, { useState } from "react";
import "./ChatBot.css";
import apiClient from "../../utils/api-client"; // Use the tool we fixed earlier!
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa"; // Icons

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I am the CartWish Genie 🧞‍♂️. Ask me anything about our products!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 1. Function to send message
  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to list
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // 2. Call your Backend AI Route
      const { data } = await apiClient.post("/chat", { message: input });

      // Add bot response to list
      const botMessage = { text: data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "My brain is tired. Try again later!", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Allow pressing "Enter" to send
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-container">
      {/* 1. The Toggle Button (Visible when closed) */}
      {!isOpen && (
        <>
          {/* NEW: The Message Bubble */}
          <div className="chatbot-greeting">
            How can I help you?
            <span className="arrow"></span> {/* Tiny arrow for the bubble */}
          </div>

          <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
            <FaRobot size={24} />
          </button>
        </>
      )}

      {/* 2. The Chat Window (Visible when open) */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>CartWish Genie 🧞‍♂️</h3>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="message bot">Thinking...</div>}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask for a product..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSend} disabled={isLoading}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
