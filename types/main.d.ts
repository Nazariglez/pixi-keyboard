import KeyboardManager from './KeyboardManager';
import HotKey from './HotKey';
import Key from './Key';
declare const keyboard: {
    KeyboardManager: typeof KeyboardManager;
    Key: typeof Key;
    HotKey: typeof HotKey;
};
export default keyboard;
