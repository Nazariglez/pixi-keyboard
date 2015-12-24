import PIXI from 'pixi.js';
import HotKey from './HotKey';

export default class KeyboardManager extends PIXI.utils.EventEmitter {
  constructor(){
    super();
    this.isEnabled = false;
    this._pressedKeys = [];
    this._releasedKeys = [];
    this._downKeys = [];

    this._hotKeys = [];
    this._preventDefaultKeys = [];
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
        this._preventDefaultKeys[key[i]] = value;
      }
    }else{
      this._preventDefaultKeys[key] = value;
    }
  }

  _onKeyDown(evt){
    let key = evt.which || evt.keyCode;
    if(this._preventDefaultKeys[key]){
      evt.preventDefault();
    }

    if(!this.isDown(key)){
      this._downKeys.push(key);
      this._pressedKeys[key] = true;
      this.emit('pressed', key);
    }
  }

  _onKeyUp(evt){
    let key = evt.which || evt.keyCode;
    if(this._preventDefaultKeys[key]){
      evt.preventDefault();
    }

    if(this.isDown(key)){
      this._pressedKeys[key] = false;
      this._releasedKeys[key] = true;

      let _index = this._downKeys.indexOf(key);
      if(_index !== -1)this._downKeys.splice(_index, 1);
      this.emit('released', key);
    }
  }

  isDown(key){
    return (this._downKeys.indexOf(key) !== -1);
  }

  isPressed(key){
    return !!this._pressedKeys[key];
  }

  isReleased(key){
    return !!this._releasedKeys[key];
  }

  update(){
    for(let key in this._hotKeys){
      this._hotKeys[key].update();
    }

    for(let n = 0; n < this._downKeys.length; n++){
      this.emit('down', this._downKeys[n]);
    }

    this._pressedKeys.length = 0;
    this._releasedKeys.length = 0;
  }

  getHotKey(key){
    let hotKey = this._hotKeys[key] || new HotKey(key, this);
    this._hotKeys[key] = hotKey;
    return hotKey;
  }

  removeHotKey(key){
    if(this._hotKeys[key]){
      delete this._hotKeys[key];
    }
  }
}

function _isArray(obj){
  return Object.prototype.toString.call(obj) === "[object Array]";
}
