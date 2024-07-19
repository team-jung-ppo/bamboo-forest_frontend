import { SocketManager } from './SocketManager';

export class AISocketManager extends SocketManager {
  static instance = null;

  constructor() {
    super(import.meta.env.VITE_WAS_URL);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AISocketManager();
    }
    return this.instance;
  }

  connect() {
    super.connect({ withCredentials: true });
  }
}