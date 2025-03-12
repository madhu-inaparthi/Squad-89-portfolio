import React, { useState, useEffect, useRef } from 'react';
import './FloatingChatBot.css';
import { marked } from 'marked';

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // Get userId from localStorage if it exists; otherwise, it starts as null.
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);

  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);

  const toggleChatBot = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (messages.length === 0) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages([
            {
              sender: 'bot',
              text: "Hello from the Upside Down! Thank you for saving me. What mysteries can I help you with today? I'm your Kalvium guide!"
            }
          ]);
          setIsTyping(false);
        }, 1500);
      }
    } else {
      setIsOpen(false);
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    try {
      const requestBody = { userInput: input, userId }; // Include userId if it exists

      const response = await fetch('https://widespread-eveline-akhil1819-43d44068.koyeb.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      // If no userId is already stored, extract it from the response header
      if (!userId) {
        const newUserId = response.headers.get('X-User-ID');
        if (newUserId) {
          setUserId(newUserId);
          localStorage.setItem('userId', newUserId);
        }
      }

      const data = await response.json();
      const botReply = data.response || "No reply received";
      const htmlReply = marked.parse(botReply);
      const botMessage = { sender: 'bot', text: htmlReply };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setTimeout(() => {
        const errorMessage = {
          sender: 'bot',
          text: 'Something strange is happening... the connection to the Upside Down seems broken.'
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current)
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && chatWindowRef.current)
      setTimeout(() => chatWindowRef.current.classList.add('open'), 10);
  }, [isOpen]);

  useEffect(() => {
    const playSound = () => {
      const sound = new Audio('/src/music/stranger-things-sound.mp3');
      sound.volume = 0.3;
      sound.play().catch(e => console.log('Audio play failed:', e));
    };
    if (isOpen) playSound();
  }, [isOpen]);

  return (
    <div className="floating-chat-bot">
      <button
        className={`chat-bot-button ${isOpen ? 'active' : ''}`}
        onClick={toggleChatBot}
        aria-label="Toggle Chat Bot"
      >
        <div className="planet-image">
          <img
            src="https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/image.png?updatedAt=1741775374388"
            alt="Jupiter Icon"
            className="jupiter-image"
          />
        </div>
        <div className="explosion-particles">
          <span className="particle p1"></span>
          <span className="particle p2"></span>
          <span className="particle p3"></span>
          <span className="particle p4"></span>
          <span className="particle p5"></span>
          <span className="particle p6"></span>
        </div>
        <div className="chat-icon">
          <div className="chat-pulse"></div>
        </div>
        <span className="burst-text"></span>
      </button>

      {isOpen && (
        <div className="chat-bot-window" ref={chatWindowRef}>
          <div className="chat-bot-header">
            <div className="header-title">
              <div className="glitch-container">
                <div className="glitch" data-text="STRANGER BOT">KALVIUM BOT</div>
              </div>
            </div>
            <button className="close-button" onClick={toggleChatBot}>X</button>
          </div>

          <div className="chat-bot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message-container ${message.sender}`}>
                <div className="bubble" dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            ))}
            {isTyping && (
              <div className="message-container bot">
                <div className="bubble typing-bubble">
                  <div className="typing-indicator">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-bot-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message to the Upside Down..."
              className="retro-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              <span>SEND</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatBot;
