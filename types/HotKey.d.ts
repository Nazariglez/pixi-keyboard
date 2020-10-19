import Key from './Key';
import KeyboardManager from "./KeyboardManager";
export default class HotKey {
    key: Key;
    manager: KeyboardManager;
    isPressed: boolean;
    isDown: boolean;
    isReleased: boolean;
    ctrl: boolean;
    shift: boolean;
    alt: boolean;
    constructor(key: Key, manager: KeyboardManager);
    update(): void;
    remove(): void;
}
