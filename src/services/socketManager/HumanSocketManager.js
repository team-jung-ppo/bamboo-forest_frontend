import { SocketManager} from "./SocketManager.js";

export class HumanSocketManager extends SocketManager {
  static instance = null;

  constructor() {
    super(import.meta.env.VITE_HUMAN_SOCKET_URL, '/signal');
  }

  static getInstace() {
    if (!this.instance) {
      this.instance = new HumanSocketManager();
    }
    return this.instance;
  }
}