import { useEffect, useState } from 'react';
import { getCookie } from '../../services/cookie.js';
import axios from 'axios';

export function usePurchaseBattery(batteryName) {
  const [purchaseBattery, setPurchaseBattery] = useState({
    orderId: null,
    amount: 0,
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

        setPurchaseBattery(res.data); // res에서 실제 데이터를 추출합니다.
      } catch (error) {
        console.error('Error fetching purchase battery:', error);
      }
    };

    if (batteryName) {
      postPurchaseBattery();
    }
  }, [batteryName]);

  return purchaseBattery;
}
