import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined responses based on keywords
  const getResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Common queries and their responses
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
      return "Our pricing varies based on the product and service. You can find detailed pricing information on our products page. For custom quotes, please contact our support team at support@picraft.com";
    }
    
    if (lowerInput.includes('delivery') || lowerInput.includes('shipping')) {
      return "We offer worldwide shipping. Delivery times vary by location: Domestic: 3-5 business days, International: 7-14 business days. For specific delivery queries, please contact our support team.";
    }
    
    if (lowerInput.includes('3d print') || lowerInput.includes('printing service')) {
      return "We offer professional 3D printing services with various materials and finishes. Please visit our 3D Printing Services page to submit your request or contact our team for custom requirements.";
    }
    
    if (lowerInput.includes('refund') || lowerInput.includes('return')) {
      return "We have a 30-day return policy for unused items. For specific refund requests or concerns, please contact our support team with your order details.";
    }

    if (lowerInput.includes('contact') || lowerInput.includes('support')) {
      return "You can reach our support team at support@picraft.com or call us at +1-234-567-8900 during business hours (9 AM - 6 PM EST).";
    }

    if (lowerInput.includes('material') || lowerInput.includes('quality')) {
      return "We use high-quality materials for all our products. For 3D printing, we offer PLA, ABS, PETG, and more. Each product listing includes detailed material specifications.";
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! How can I help you today? Feel free to ask about our products, services, or any other questions you might have.";
    }

    // Default response for unknown queries
    return "I can help with basic questions about our products and services. For more specific assistance, please contact our support team at support@picraft.com or call us at +1-234-567-8900.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const response = getResponse(input);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response
      }]);
      setIsLoading(false);
    }, 1000);
  };

  // Add initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: "Hello! I'm PiCraft's virtual assistant. How can I help you today? Feel free to ask about our products, services, shipping, or any other questions!"
      }]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-96 h-[600px] bg-gray-900 rounded-lg shadow-xl flex flex-col z-50 border border-gray-700"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Chat Support</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-200'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-200 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className={`bg-blue-600 text-white p-2 rounded-lg transition-colors ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget; 