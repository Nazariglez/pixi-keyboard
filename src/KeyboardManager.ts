import * as PIXI from 'pixi.js';
import HotKey from './HotKey';
import Key from "./Key";

export default class KeyboardManager extends PIXI.utils.EventEmitter {
  isEnabled: boolean = false;
  private pressedKeys = [];
  private releasedKeys = [];
  private downKeys = [];

  private hotKeys = [];
  private preventDefaultKeys = [];

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
    console.log(key);
    if(this.preventDefaultKeys[key]){
      evt.preventDefault();
    }

    if(!this.isDown(key)){
      this.downKeys.push(key);
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

      let _index = this.downKeys.indexOf(key);
      if(_index !== -1)this.downKeys.splice(_index, 1);
      this.emit('released', key);
    }
  }

  isDown(key: Key){
    console.log(key, this.downKeys, this.downKeys.includes(key), this.downKeys.indexOf(key) !== -1);
    return (this.downKeys.indexOf(key) !== -1);
  }

  isPressed(key: Key){
    return !!this.pressedKeys[key];
  }

  isReleased(key: Key){
    return !!this.releasedKeys[key];
  }

  update(){
    this.hotKeys.forEach(key => key.update());

    for(let n = 0; n < this.downKeys.length; n++){
      this.emit('down', this.downKeys[n]);
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
