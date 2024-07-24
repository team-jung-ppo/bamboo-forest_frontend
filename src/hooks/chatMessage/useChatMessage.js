import { useState } from "react";

export function useChatMessage() {
  const [messages, setMessages] = useState([]);

  const pushMessage = (type, profile, option) => {
    setMessages(messages => [...messages, { type, profile, ...option }]);
  };

  const updateMessage = (setMessage) => {
    setMessages(messages =>  [...messages.slice(0, -1), setMessage(messages[messages.length - 1])]);
  };

  return { messages, pushMessage, updateMessage }
}