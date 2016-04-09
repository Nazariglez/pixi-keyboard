pixi-keyboard
======================

pixi-keyboard is a plugin for Pixi.js v3.0.8 or higher to manage the keyboard events easily.

## Installation
```
npm install pixi-keyboard
```

## Usage
### Browserify - Webpack
If you use Browserify or Webpack you can use pixi-keyboard like this:

```js
var PIXI = require('pixi.js');
var keyboard = require('pixi-keyboard'); //pixi-keyboard is added automatically to the PIXI namespace

//create PIXI renderer
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

function animate(){
  window.requestAnimationFrame(animate);
  renderer.render(stage);
  //add to your raf the keyboard update
  PIXI.keyboardManager.update();
}
animate();
```

### Prebuilt files

```js
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

function animate(){
  window.requestAnimationFrame(animate);
  renderer.render(stage);
  //add to your raf the keyboard update
  PIXI.keyboardManager.update();
}
animate();
```

### How it works
This plugin add a new namespace named `keyboard` with 3 new classes (KeyboardManager, Key and HotKey) to the PIXI namespace, and create an instance for KeyboardManager in PIXI.keyboardManager, but you don't need worry about that, all you need is add PIXI.keyboardManager.update() in the end of your requestAnimationFrame or [AnimationLoop](https://github.com/Nazariglez/pixi-animationloop/).

### Events
KeyboardManager extends from [PIXI.utils.EventEmitter](https://github.com/primus/eventemitter3), and emit three events: pressed, down and released. All these events has as param the keyCode. More info: [Node.js Events](https://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2)
```js
PIXI.keyboardManager.on('down', function(key){
  //If a key is down
  console.log('Key down:' + key);
});

PIXI.keyboardManager.on('pressed', function(key){
  //If a key was pressed
  console.log('Key pressed:' + key);
});

PIXI.keyboardManager.on('released', function(key){
  //If a key was released
  console.log('Key released:' + key);
});
```

### Check the state for one key
```js
if(PIXI.keyboardManager.isPressed(PIXI.Key.CTRL)){
  console.log('Control key is pressed');
}

if(PIXI.keyboardManager.isDown(PIXI.Key.CTRL)){
  console.log('Control key is down');
}

if(PIXI.keyboardManager.isReleased(PIXI.Key.CTRL)){
  console.log('Control key is released');
}
```

### Using HotKeys
```js
var shoot = PIXI.keyboardManager.getHotKey(PIXI.Key.SPACE);
var reload = PIXI.keyboardManager.getHotKey(PIXI.Key.R);

function animate(){
  window.requestAnimationFrame(animate);

  if(shoot.isPressed){
    if(shoot.ctrl){
      console.log('Nuke bomb!');
    }else{
      console.log('Normal shot');
    }
  }

  if(reload.isReleased){
    console.log('Reload my gun');
  }

  PIXI.keyboardManager.update();
}
animate();
```
## API
### KeyboardManager
#### constructor()
The constructor
#### .isEnabled
State of the keyboard manager, do not change, use always .enable() and .disable()
#### .enable()
Listen keyboard events
#### .disable()
Do not listen keyboard events
#### .setPreventDefault(key [, value])
Avoid the default behavior when a key is touched, useful for arrows, to prevent the page's scroll or back. Value it's a boolean (default=true)
#### .isDown( key )
Return if the key is down
#### .isPressed( key )
Return if the key was pressed
#### .isReleased( key )
Return if the key was released
#### .update()
Update method, add to your RAF or AnimationLoop
#### .getHotKey( key )
Return a HotKey
#### .removeHotKey( key )
Remove a hotKey

### HotKey
#### constructor( key, manager )
The constructor, whenever you can use PIXI.keyboard.getHotKey
#### .key
Key code for this HotKey
#### .manager
KeyboardManager instance
#### .isDown
Return if the key is down
#### .isPressed
Return if the key was pressed
#### .isReleased
Return if the key was released
#### .ctrl
Return if the control key is down
#### .shift
Return if the shift key is down
#### .alt
Return if the alt key is down
#### .remove()
Remove this HotKey from the KeyboardManager

##KEY names
All keyCode has an name as alias, you can see it [here](https://github.com/Nazariglez/pixi-keyboard/blob/master/src/Key.js).
