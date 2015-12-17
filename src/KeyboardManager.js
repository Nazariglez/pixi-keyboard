import HotKey from './HotKey';

export default class KeyboardManager {
  constructor(){
    this.isEnabled = false;
    this._pressedKeys = [];
    this._releasedKeys = [];
    this._downKeys = [];

    this._hotKeys = [];
    this._preventDefaultKeys = [];

    this._callbacks = {
      down:[],
      pressed:[],
      released:[]
    };
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

      let len = this._callbacks.pressed.length;
      for(let i = 0; i < len; i++){
        this._callbacks.pressed[i](key);
      }
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

      let len = this._callbacks.released.length;
      for(let i = 0; i < len; i++){
        this._callbacks.released[i](key);
      }
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

    let len = this._callbacks.down.length;
    for(let i = 0; i < len; i++){
      for(let n = 0; n < this._downKeys.length; n++){
        this._callbacks.down[i](this._downKeys[n]);
      }
    }

    this._pressedKeys.length = 0;
    this._releasedKeys.length = 0;
  }

  addCallback(state, cb){
    let allowedStates = Object.keys(this._callbacks);
    if(allowedStates.indexOf(state) !== -1){
      let _index = this._callbacks[state].indexOf(cb);
      if(_index === -1)this._callbacks[state].push(cb);
    }else{
      console.error('State names for keyboard callback should be one of these: ' + allowedStates.join(","));
    }
  }

  removeCallback(state, cb){
    let allowedStates = Object.keys(this._callbacks);
    if(allowedStates.indexOf(state) !== -1){
      let _index = this._callbacks[state].indexOf(cb);
      if(_index !== -1)this._callbacks[state].splice(_index, 1);
    }else{
      console.error('State names for keyboard callback should be one of these: ' + allowedStates.join(","));
    }
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
