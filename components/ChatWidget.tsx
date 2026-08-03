"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

const SUGGESTED_QUESTIONS = [
  "What are your core technical skills?",
  "Tell me about your Local AI Inference Platform.",
  "What is your education & CGPA?",
  "Tell me about your Glaucoma AI project.",
  "Have you solved coding problems on LeetCode?"
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I am Sourajit's AI assistant representing him for HR & technical inquiries. Ask me anything about his projects, skills, education, or background!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (questionText?: string) => {
    const query = questionText || input.trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      const data = await res.json();
      const answer = data.Answer || data.answer || data.error || "I don't have enough information.";

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "Sorry, I ran into an error getting the answer. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center gap-2 px-4 py-3 bg-ctp-mauve text-ctp-base font-semibold rounded-full shadow-xl shadow-ctp-mauve/25 hover:brightness-110 transition-all group"
          aria-label="Toggle AI Recruiter Chat"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-sm">Ask AI Candidate</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ctp-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-ctp-green"></span>
          </span>
        </motion.button>
      </div>

      {/* Chat Drawer/Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[550px] max-h-[80vh] bg-ctp-base/95 backdrop-blur-xl border border-ctp-surface1 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-ctp-mantle border-b border-ctp-surface0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-ctp-mauve/20 border border-ctp-mauve/30 flex items-center justify-center text-ctp-mauve">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ctp-text flex items-center gap-2">
                    AI Recruiter Assistant
                    <span className="px-1.5 py-0.5 text-[10px] bg-ctp-green/10 text-ctp-green border border-ctp-green/20 rounded font-mono">
                      Groq Llama-3.3
                    </span>
                  </h3>
                  <p className="text-xs text-ctp-subtext0">Candidate Rep for Sourajit Majumder</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-ctp-overlay0 hover:text-ctp-text hover:bg-ctp-surface0 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                      msg.sender === "user"
                        ? "bg-ctp-surface1 text-ctp-text"
                        : "bg-ctp-mauve text-ctp-base"
                    }`}
                  >
                    {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>

                  <div className={`flex flex-col gap-1 max-w-[80%]`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.sender === "user"
                          ? "bg-ctp-mauve text-ctp-base font-medium rounded-tr-none"
                          : "bg-ctp-mantle border border-ctp-surface0 text-ctp-text rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span
                      className={`text-[10px] text-ctp-overlay0 font-mono ${
                        msg.sender === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-3 items-center text-ctp-subtext0">
                  <div className="w-8 h-8 rounded-full bg-ctp-mauve text-ctp-base flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-ctp-mantle border border-ctp-surface0 p-3 rounded-2xl rounded-tl-none flex items-center gap-2 text-xs">
                    <Loader2 size={14} className="animate-spin text-ctp-mauve" />
                    <span>Analyzing resume & generating response...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Chips */}
            {messages.length < 5 && (
              <div className="px-4 py-2 border-t border-ctp-surface0/50 bg-ctp-mantle/50">
                <p className="text-[11px] text-ctp-overlay1 mb-2 font-medium">Suggested Questions:</p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      disabled={loading}
                      className="px-2.5 py-1 text-[11px] bg-ctp-surface0/60 hover:bg-ctp-surface1 border border-ctp-surface1 rounded-lg text-ctp-subtext0 hover:text-ctp-text transition-colors text-left disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-ctp-mantle border-t border-ctp-surface0 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask an HR question about candidate..."
                className="flex-1 bg-ctp-base border border-ctp-surface0 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-ctp-text placeholder-ctp-overlay0 focus:outline-none focus:border-ctp-mauve transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2.5 rounded-xl bg-ctp-mauve text-ctp-base hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 transition-all"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
