import * as PIXI from 'pixi.js';
import HotKey from './HotKey';
import Key from "./Key";

export default class KeyboardManager extends PIXI.utils.EventEmitter {
  isEnabled: boolean = false;
  private pressedKeys:boolean[] = [];
  private releasedKeys:boolean[] = [];
  private downKeys:{[key: number]: number} = {};

  private hotKeys:HotKey[] = [];
  private preventDefaultKeys:boolean[] = [];

  constructor(){
    super();
  }

  enable(){
    if(!this.isEnabled){
      this.isEnabled = true;
      this._enableEvents();
    }
  }

  _enableEvents(){
    window.addEventListener('keydown', this._onKeyDown.bind(this), true);
    window.addEventListener('keyup', this._onKeyUp.bind(this), true);
  }

  disable(){
    if(this.isEnabled){
      this.isEnabled = false;
      this._disableEvents();
    }
  }

  _disableEvents() {
    window.removeEventListener('keydown', this._onKeyDown, true);
    window.removeEventListener('keyup', this._onKeyUp, true);
  }

  setPreventDefault(key, value = true){
    if(_isArray(key)){
      for(let i = 0; i < key.length; i++){
        this.preventDefaultKeys[key[i]] = value;
      }
    }else{
      this.preventDefaultKeys[key] = value;
    }
  }

  _onKeyDown(evt){
    let key = evt.which || evt.keyCode;
    if(this.preventDefaultKeys[key]){
      evt.preventDefault();
    }

    if(!this.isDown(key)){
      this.downKeys[key] = 0;
      this.pressedKeys[key] = true;
      this.emit('pressed', key);
    }
  }

  _onKeyUp(evt){
    let key = evt.which || evt.keyCode;
    if(this.preventDefaultKeys[key]){
      evt.preventDefault();
    }

    if(this.isDown(key)){
      this.pressedKeys[key] = false;
      this.releasedKeys[key] = true;

      delete this.downKeys[key];
      this.emit('released', key);
    }
  }

  downTime(key: Key): number {
    return this.downKeys[key] || 0;
  }

  isDown(key: Key): boolean {
    return this.downKeys.hasOwnProperty(key);
  }

  isPressed(key: Key): boolean {
    return !!this.pressedKeys[key];
  }

  isReleased(key: Key): boolean {
    return !!this.releasedKeys[key];
  }

  update(delta: number = 0){
    this.hotKeys.forEach(key => key.update());

    for(let key in this.downKeys) {
      if (!this.downKeys.hasOwnProperty(key)) {
        continue;
      }

      this.downKeys[key] += delta;
      this.emit('down', key);
    }

    this.pressedKeys.length = 0;
    this.releasedKeys.length = 0;
  }

  getHotKey(key: Key){
    let hotKey = this.hotKeys[key] || new HotKey(key, this);
    this.hotKeys[key] = hotKey;
    return hotKey;
  }

  removeHotKey(key: Key){
    if(this.hotKeys[key]){
      delete this.hotKeys[key];
    }
  }
}

function _isArray(obj){
  return Object.prototype.toString.call(obj) === "[object Array]";
}
