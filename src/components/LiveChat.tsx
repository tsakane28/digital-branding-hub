
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

interface Message {
  id: number;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [email, setEmail] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].liveChat;

  // Check if we're within business hours (9AM-5PM, Monday-Friday)
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hour = now.getHours();
      
      // Check if it's a weekday (Monday-Friday) and within business hours
      const isBusinessDay = dayOfWeek >= 1 && dayOfWeek <= 5;
      const isBusinessHour = hour >= 9 && hour < 17;
      
      setIsOnline(isBusinessDay && isBusinessHour);
    };
    
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  // Add initial greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      if (isOnline) {
        setMessages([
          {
            id: 1,
            text: t.greeting,
            sender: "agent",
            timestamp: new Date()
          }
        ]);
      } else {
        setMessages([
          {
            id: 1,
            text: t.offlineMessage,
            sender: "agent",
            timestamp: new Date()
          }
        ]);
      }
    }
  }, [isOpen, isOnline, messages.length, t]);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: newMessage,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    
    // Simulate agent response if online
    if (isOnline) {
      setTimeout(() => {
        const agentMessage: Message = {
          id: Date.now(),
          text: "Thank you for your message. One of our agents will respond shortly.",
          sender: "agent",
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, agentMessage]);
      }, 1000);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-20 right-4 z-50 rounded-full w-12 h-12 shadow-lg"
        aria-label="Live Chat"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 z-50 w-[350px] max-h-[500px] shadow-xl border border-border bg-background">
          <CardHeader className="bg-primary/10 px-4 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/logo.png" alt="Support Agent" />
                  <AvatarFallback className="bg-primary text-white">
                    <MessageSquare className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{t.title}</CardTitle>
                  <div className="flex items-center gap-1 text-xs">
                    <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span>{isOnline ? 'Online' : 'Offline'}</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-4 overflow-y-auto max-h-[300px]">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 block mt-1">
                      {message.timestamp.toLocaleTimeString(undefined, { 
                        hour: "2-digit", 
                        minute: "2-digit" 
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {!isOnline && (
              <div className="mt-4 p-3 bg-secondary/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">{t.offlineHours}</p>
                <div className="flex flex-col space-y-2">
                  <p className="text-xs text-muted-foreground">{t.emailPrompt}</p>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="text-sm"
                  />
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="p-3 border-t">
            <div className="flex w-full gap-2">
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={t.placeholder}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default LiveChat;
