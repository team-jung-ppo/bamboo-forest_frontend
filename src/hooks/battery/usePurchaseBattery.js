import { useEffect, useState } from 'react';
import {getCookie, setCookie} from '../../services/cookie.js';
import axios from 'axios';

export function usePurchaseBattery(batteryName) {
  const [purchaseBattery, setPurchaseBattery] = useState({
    orderId: null,
    amount: 0,
    name: ''
  });

  useEffect(() => {
    const postPurchaseBattery = async () => {
      try {
        const accessToken = getCookie('accessToken');
        const res = await axios.post(
          `${import.meta.env.VITE_WAS_URL}/api/payments/setup`,
          {
            batteryItemName: batteryName,
          },
          {
            withCredentials: true,
            headers: {
              Authorization: `${accessToken}`,
            },
          }
        );

        setPurchaseBattery({ ...res.data, name: batteryName }); // res에서 실제 데이터를 추출합니다.
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
            postPurchaseBattery();
            return;
          } catch (reissuanceError) {
            console.error("Error reissuing token", reissuanceError);
          }
        }
        console.error('Error fetching purchase battery:', error);
      }
    };

    if (batteryName) {
      postPurchaseBattery();
    }
  }, [batteryName]);

  return purchaseBattery;
}
