"use client";

import { useEffect, useState, useRef } from "react";
import { APP_NAME } from "@askwell/shared";
import { Send, Bot, X } from "lucide-react";

interface Message {
  id: string;
  role: "visitor" | "bot";
  text: string;
}

export default function EmbedChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "bot",
      text: "Hi! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate or read visitor ID in localStorage
    if (typeof window !== "undefined") {
      let visitorId = localStorage.getItem("askwell_visitor_id");
      if (!visitorId) {
        visitorId = "vis_" + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("askwell_visitor_id", visitorId);
      }
    }
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "visitor",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Mock reply for Phase 0/2 shell before Phase 3 chat API
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "bot",
          text: "I am ready to answer questions once knowledge documents are configured.",
        },
      ]);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleClose = () => {
    if (typeof window !== "undefined" && window.parent) {
      window.parent.postMessage({ type: "ASKWELL_CLOSE" }, "*");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white text-zinc-900 overflow-hidden font-sans">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold leading-none">{APP_NAME} Support</div>
            <div className="text-xs text-zinc-500 mt-0.5">Online</div>
          </div>
        </div>
        <button
          onClick={handleClose}
          aria-label="Close chat"
          className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/50 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "visitor" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 leading-relaxed break-words whitespace-pre-wrap ${
                m.role === "visitor"
                  ? "bg-black text-white rounded-br-xs"
                  : "bg-zinc-100 text-zinc-800 rounded-bl-xs"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-100 text-zinc-500 rounded-2xl rounded-bl-xs px-4 py-2.5 text-xs animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-zinc-200 bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            maxLength={1000}
            className="flex-1 px-3 py-2 text-sm border border-zinc-200 rounded-full focus:outline-none focus:border-zinc-400 bg-zinc-50 placeholder:text-zinc-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send message"
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center disabled:opacity-40 hover:bg-zinc-800 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Powered by badge (Free tier) */}
      {showBadge && (
        <div className="py-1.5 text-center text-[11px] text-zinc-400 bg-zinc-50 border-t border-zinc-100">
          Powered by <span className="font-medium text-zinc-600">{APP_NAME}</span>
        </div>
      )}
    </div>
  );
}
