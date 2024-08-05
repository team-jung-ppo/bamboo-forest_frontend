import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie, setCookie} from "../../services/cookie.js";
import {useReisuedToken} from "../auth/useReisuedToken.js";

export function usePurchaseChatbots() {
  const [chatbots, setChatbots] = useState([]);

  useEffect(() => {
    const fetchPurchaseChatbots = async () => {
      const accessToken = getCookie('accessToken');
      if (!accessToken) {
        console.error("Access token is missing");
        return;
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_WAS_URL}/api/chatbots/purchases`, {
          withCredentials: true,
          headers: {
            'Authorization': `${accessToken}`
          }
        });
        setChatbots(res.data);
      } catch (error) {
        if (error.response && error.response.data.code === 'E003') {
          try {
            const refreshToken = getCookie('refreshToken');
            const res = await axios.post(`${import.meta.env.VITE_WAS_URL}/api/members/reissuance`, null, {
              withCredentials: true,
              headers: {
                'Authorization': `Bearer ${refreshToken}`
              }
            });
            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data;
            setCookie('accessToken', newAccessToken);
            setCookie('refreshToken', newRefreshToken);
            fetchPurchaseChatbots();
            return;
          } catch (reissuanceError) {
            console.error("Error reissuing token", reissuanceError);
          }
        }
        console.error("Error fetching chatbots", error);
      }
    }

    fetchPurchaseChatbots();
  }, []);

  return chatbots;
}