pixi-animationloop
======================

pixi-keyboard is a plugin for Pixi.js v3 or higher to manage the keyboard events easily.

## Installation
```
npm install pixi-keyboard
```

## Usage
### Browserify - Webpack
If you use Browserify or Webpack you can use pixi-keyboard like this:

```js
var PIXI = require('pixi.js');
var AnimationLoop = require('pixi-animationloop'); //pixi-keyboard is added automatically to the PIXI namespace

//create PIXI renderer
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);

```

### Prebuilt files

```js
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);

```
