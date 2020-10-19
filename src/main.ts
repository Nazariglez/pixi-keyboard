import * as PIXI from'pixi.js';
import KeyboardManager from './KeyboardManager';
import HotKey from './HotKey';
import Key from './Key';

const keyboard = {
  KeyboardManager: KeyboardManager,
  Key: Key,
  HotKey: HotKey
};

const AnyPIXI = PIXI as any;

if(!AnyPIXI.keyboard){
  let keyboardManager = new KeyboardManager();
  keyboardManager.enable();

  AnyPIXI.keyboard = keyboard;
  AnyPIXI.keyboardManager = keyboardManager;
}
export default keyboard;
