import {useEffect, useState} from "react";
import {getCookie, setCookie} from "../../services/cookie.js";
import axios from "axios";

export function useGetBuyBatteryList() {
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    const fetchBuyList = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_WAS_URL}/api/payments`, {
          withCredentials: true,
          headers: {
            Authorization: `${accessToken}`,
          }
        });
        setBuyList(res.data);
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
            fetchBuyList();
            return;
          } catch (reissuanceError) {
            console.error("Error reissuing token", reissuanceError);
          }
        }
      }
    }

    fetchBuyList();
  }, []);

  return buyList;
}