import PIXI from'pixi.js';
import KeyboardManager from './KeyboardManager';
import HotKey from './HotKey';
import Key from './Key';

if(!PIXI.KeyboardManager){
  let keyboard = new KeyboardManager();
  keyboard.enable();

  PIXI.KeyboardManager = KeyboardManager;
  PIXI.Key = Key;
  PIXI.HotKey = HotKey;
  PIXI.keyboard = keyboard;
}
export default PIXI.keyboard;
