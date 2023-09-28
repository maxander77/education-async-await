import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data); 
      return JSON.parse(value);
    } catch (error) {
      throw new Error('Failed to load game saving: ' + error.message);
    }
  }
} 