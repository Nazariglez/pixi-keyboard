import PIXI from'pixi.js';
import KeyboardManager from './KeyboardManager';
import HotKey from './HotKey';
import Key from './Key';

let keyboard = {
  KeyboardManager: KeyboardManager,
  Key: Key,
  HotKey: HotKey
};

if(!PIXI.keyboard){
  let keyboardManager = new KeyboardManager();
  keyboardManager.enable();

  PIXI.keyboard = keyboard;
  PIXI.keyboardManager = keyboardManager;
}
export default keyboard;
