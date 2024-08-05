import {useCallback, useEffect} from "react";
import {io, Socket} from "socket.io-client";

let socket;

export default function useSocket() {
  const disconnect = useCallback(() => {
    socket?.disconnect();
    socket = null;
  }, []);

  useEffect(() => {
    if (!socket) {
      socket = io(`${import.meta.env.VITE_SOCKET_URL}`, {
        path: '/ws',
        transports: ['websocket'],
      });
      socket.on('connect_error', (err) => {
        console.error(err);
        console.log(`connect_error due to ${err.message}`);
        socket = null;
      })
    }
  }, []);

  return [socket, disconnect];
}