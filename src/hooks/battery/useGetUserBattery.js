import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie, setCookie} from "../../services/cookie.js";

export function useGetUserBattery() {
  const [userBattery, setUserBattery] = useState(0);

  useEffect(() => {
    const fetchUserBattery = async () => {
      try {
        const accessToken = getCookie("accessToken");
        const res = await axios.get(`${import.meta.env.VITE_WAS_URL}/api/members/profile`, {
          withCredentials: true,
          headers: {
            'Authorization': `${accessToken}`
          }
        });
        setUserBattery(res.data.batteryCount);
      } catch (error) {
        if (error.response && error.response.data.code === 'E003') {
          try {
            const refreshToken = getCookie('refreshToken');
            const res = await axios.post(`${import.meta.env.VITE_WAS_URL}/api/members/reissuance`, null, {
              withCredentials: true,
              headers: {
                'Authorization': `${refreshToken}`
              }
            });
            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data;
            setCookie('accessToken', newAccessToken);
            setCookie('refreshToken', newRefreshToken);
            fetchUserBattery();
            return;
          } catch (reissuanceError) {
            console.error("Error reissuing token", reissuanceError);
          }
        }
        console.error("Error fetching user battery:", error);
      }
    };

    fetchUserBattery();
  }, []);

  return userBattery;
}