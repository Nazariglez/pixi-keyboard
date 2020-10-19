import * as PIXI from 'pixi.js';
import HotKey from './HotKey';
import Key from "./Key";
export default class KeyboardManager extends PIXI.utils.EventEmitter {
    isEnabled: boolean;
    private pressedKeys;
    private releasedKeys;
    private downKeys;
    private hotKeys;
    private preventDefaultKeys;
    constructor();
    enable(): void;
    _enableEvents(): void;
    disable(): void;
    _disableEvents(): void;
    setPreventDefault(key: any, value?: boolean): void;
    _onKeyDown(evt: any): void;
    _onKeyUp(evt: any): void;
    downTime(key: Key): number;
    isDown(key: Key): boolean;
    isPressed(key: Key): boolean;
    isReleased(key: Key): boolean;
    update(delta?: number): void;
    getHotKey(key: Key): HotKey;
    removeHotKey(key: Key): void;
}
