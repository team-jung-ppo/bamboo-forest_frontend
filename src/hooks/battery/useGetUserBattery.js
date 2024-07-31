import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "../../services/cookie.js";

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
        console.error("Error fetching user battery:", error);
      }
    };

    fetchUserBattery();
  }, []);

  return userBattery;
}