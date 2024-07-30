import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "../../services/cookie.js";

export function usePurchaseChatbots() {
  const [chatbots, setChatbots] = useState([]);

  useEffect(() => {
    const fetchPurchaseChatbots = async () => {
      try {
        const accessToken = getCookie('accessToken');
        const res = await axios.get(`${import.meta.env.VITE_WAS_URL}/api/chatbots/purchases`, {
          withCredentials: true,
          headers: {
            'Authorization': `${accessToken}`
          }
        });
        setChatbots(res.data);
      } catch (error) {
        console.error("Error fetching chatbots", error);
      }
    }

    fetchPurchaseChatbots();
  }, []);

  return chatbots;
}