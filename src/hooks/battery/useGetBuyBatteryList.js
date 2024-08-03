import {useEffect, useState} from "react";
import {getCookie} from "../../services/cookie.js";
import axios from "axios";

export function useGetBuyBatteryList() {
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    const fetchButList = async () => {
      const res = await axios.get(`${import.meta.env.VITE_WAS_URL}/api/payments`, {
        withCredentials: true,
        headers: {
          Authorization: `${accessToken}`,
        }
      });

      setBuyList(res.data);
    }

    fetchButList();
  }, []);

  return buyList;
}