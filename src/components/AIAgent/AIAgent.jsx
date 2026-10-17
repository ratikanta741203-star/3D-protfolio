import React, { useState, useEffect, useRef } from 'react';
import { queryRatikantaAgent } from '../../data/agentKnowledge';
import './AIAgent.css';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'agent',
    text: `Hello! I'm Ratikanta's portfolio guide. Ask me about his B.Tech studies at EATM, development skills, projects, hackathons, or how to get in touch.`,
    timestamp: 'Just now',
    suggestions: [
      'Who is Ratikanta?',
      'What are his top skills?',
      'Tell me about Rudram 2.0',
      'Download resume',
    ],
  },
];

let nextMessageId = 2;
function createMessageMetadata() {
  return {
    id: nextMessageId++,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = {
      ...createMessageMetadata(),
      sender: 'user',
      text: query.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const response = queryRatikantaAgent(query);
      const agentMsg = {
        ...createMessageMetadata(),
        sender: 'agent',
        text: response.text,
        action: response.action,
        suggestions: response.suggestions,
      };

      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleActionClick = (action) => {
    if (!action) return;

    if (action.type === 'scroll') {
      const el = document.getElementById(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    } else if (action.type === 'download') {
      const link = document.createElement('a');
      link.href = action.target;
      link.download = 'Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <aside className="ai-agent-container" aria-label="Portfolio Guide">
      {/* Floating Toggle Button */}
      <button
        type="button"
        className={`ai-agent-launcher clay-btn clay-btn-sienna ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close portfolio guide' : 'Open portfolio guide'}
        title="Ask the portfolio guide"
      >
        <span className="launcher-pulse-dot" />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
          <rect x="4" y="8" width="16" height="12" rx="4"></rect>
          <circle cx="9" cy="13" r="1.5" fill="currentColor"></circle>
          <circle cx="15" cy="13" r="1.5" fill="currentColor"></circle>
          <path d="M10 17h4"></path>
        </svg>
        <span className="launcher-text mono-tag">{isOpen ? 'CLOSE' : 'ASK'}</span>
      </button>

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="ai-chat-window clay-card" role="dialog" aria-label="Portfolio guide chat">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-avatar-badge">
                <img
                  src="/images/avatar-developer-3d.webp"
                  alt="Ratikanta AI Agent Avatar"
                  className="ai-avatar-thumb"
                />
                <span className="ai-status-online" title="Online" />
              </div>
              <div className="ai-header-info">
                <h3 className="ai-agent-name">A9 Assistant</h3>
                <span className="ai-agent-role mono-tag">KNOWLEDGE BASE // ACTIVE</span>
              </div>
            </div>

            <button
              type="button"
              className="ai-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Minimize AI chat window"
            >
              ✕
            </button>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-body" tabIndex={0} aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message-row ${msg.sender === 'user' ? 'row-user' : 'row-agent'}`}>
                {msg.sender === 'agent' && (
                  <div className="agent-mini-icon">RS</div>
                )}

                <div className={`ai-message-bubble ${msg.sender === 'user' ? 'bubble-user clay-btn-burgundy' : 'bubble-agent clay-inset'}`}>
                  <p className="ai-message-text">{msg.text}</p>

                  {/* Interactive Action Button */}
                  {msg.action && (
                    <button
                      type="button"
                      className="clay-btn clay-btn-sienna ai-action-button"
                      onClick={() => handleActionClick(msg.action)}
                    >
                      <span>{msg.action.label}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  )}

                  {/* Suggestion Chips */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="ai-suggestions-tray">
                      <span className="suggestions-label mono-tag">SUGGESTED QUESTIONS:</span>
                      <div className="suggestions-list">
                        {msg.suggestions.map((sug, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            className="suggestion-chip clay-badge"
                            onClick={() => handleSendMessage(sug)}
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="ai-message-time mono-tag">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-message-row row-agent">
                <div className="agent-mini-icon">RS</div>
                <div className="ai-typing-indicator clay-inset">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input & Controls */}
          <div className="ai-chat-footer">
            <div className="ai-input-wrap">
              <input
                ref={inputRef}
                type="text"
                className="ai-chat-input clay-inset"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Ask a question about Ratikanta Sahoo"
              />
              <button
                type="button"
                className="ai-send-btn clay-btn clay-btn-sienna"
                onClick={() => handleSendMessage()}
                disabled={!inputQuery.trim()}
                aria-label="Send query"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div className="ai-footer-note mono-tag">
              <span>POWERED BY RATIKANTA'S PORTFOLIO KNOWLEDGE ENGINE</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
