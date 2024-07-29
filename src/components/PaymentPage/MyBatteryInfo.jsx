import {useGetUserBattery} from "../../hooks/battery/useGetUserBattery.js";
import styles from "./myBattery.module.css"

export function MyBatteryInfo() {
  const userBattery = useGetUserBattery();

  return (
    <div className={styles.block}>
      <h3>나의 이용정보</h3>
      <div className={styles.userBattery}>
        <p>🔋보유중인 배터리: {userBattery}개</p>
      </div>
    </div>
  )
}