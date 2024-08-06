// import {useState} from "react";
// import Stomp from '@stomp/stompjs';
// import { Client } from "@stomp/stompjs";
// import {getCookie} from "../services/cookie.js";
//
// export function useStomp() {
//   const [stompClient, setStompClient] = useState(null);
//
//   const stomp = new Client({
//     brokerURL: `${import.meta.env.VITE_SOCKET_URL}`,
//     connectHeaders: {
//       Authorization: `${getCookie(`accessToken`)}`,
//     },
//     debug: (str) => {
//       console.log(str)
//     },
//     reconnectDelay: 5000,
//     heartbeatIncoming: 4000,
//     heartbeatOutgoing: 4000,
//   });
//   setStompClient(stomp);
//
//   return [stomp, stompClient];
// }