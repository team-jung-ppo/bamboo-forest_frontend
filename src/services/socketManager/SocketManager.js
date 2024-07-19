import { Socket, io } from 'socket.io-client';

export class SocketManager {
  #socket;

  #url;
  #path;

  constructor(url, path = null) {
    this.#url = url;
    this.#path = path;
  }

  get socket() {
    return this.#socket;
  }

  get connected() {
    if (!this.#socket) return false;
    return this.#socket.connected;
  }

  connect({ withCredentials = false } = {}) {
    if (this.#socket?.connected) {
      return;
    }
    this.#socket = io(this.#url, { path: this.#path, withCredentials });

    this.#socket?.on('disconnect', () => {
      alert('서버와 연결이 끊겼습니다. 메인 페이지로 이동합니다.');
      window.location.href = '/';
    });

    this.#socket?.on('connect_error', () => {
      alert('서버와 연결할 수 없습니다. 메인 페이지로 이동합니다.');
      window.location.href = '/';
    });
  }

  disconnect() {
    if (!this.#socket?.connected) {
      return;
    }
    this.#socket.disconnect();
    this.#socket = undefined;
  }

  on(...params) {
    if (!this.#socket) {
      throw new Error('소켓이 존재하지 않습니다.');
    }
    this.#socket.on(...params);
  }

  emit(...params) {
    if (!this.#socket) {
      throw new Error('소켓이 존재하지 않습니다.');
    }
    this.#socket.emit(...params);
  }
}