import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "../../services/cookie.js";

export function useReisuedToken() {
  const [token, setToken] = useState({ accessToken: "", refreshToken: "" });

  useEffect(() => {
    const fetchToken = async() => {
      try {
        const accessToken = getCookie("accessToken");
        const res = await axios.post(`${import.meta.env.VITE_WAS_URL}/api/members/reissuance`, null, {
          withCredentials: true,
          headers: {
            'Authorization': `${accessToken}`
          }
        });
        console.log(res.data);
        setToken(res.data);
      } catch (error) {
        console.log("재발급 실패");
      }
    }

    fetchToken();
  }, []);

  return { acecessToken: token.accessToken, refreshToken: token.refreshToken };
}