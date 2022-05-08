import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "../store/store";

class StorageService {
  private static PRIVATE_KEYS = {
    SESSION_TOKEN: "TOKEN",
  };

  static removeStorageFromLogout(): void {
    const privateStorageKeys = StorageService.PRIVATE_KEYS as any;

    const privateKeys = [privateStorageKeys.SESSION_TOKEN];

    privateKeys.forEach((key) => {
      AsyncStorage.removeItem(key);
    });
  }

  static saveState(state: AppState): void {
    try {
      const serializedState = JSON.stringify(state);
      AsyncStorage.setItem("state", serializedState);
    } catch (e) {
      console.error(e);
    }
  }

  static async loadState(): Promise<any> {
    try {
      const serializedState = await AsyncStorage.getItem("state");
      if (serializedState == null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  }

  static setSessionToken(token: string): void {
    try {
      AsyncStorage.setItem(StorageService.PRIVATE_KEYS.SESSION_TOKEN, token);
    } catch (e) {
      console.error(e);
    }
  }

  static async getSessionToken(): Promise<string | null> {
    try {
      return  await AsyncStorage.getItem(StorageService.PRIVATE_KEYS.SESSION_TOKEN);
    } catch (e) {
      return null;
    }
  }
}

export default StorageService;