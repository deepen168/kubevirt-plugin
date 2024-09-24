import React, { useRef, useState } from 'react';
import { KeyEventModes, textInputKeyHandler } from '../constants';
/**
 * Use this hook for components that require visibility only
 * when the user is actively interacting with the document.
 */
export var useDocumentListener = function (keyEventMap) {
    if (keyEventMap === void 0) { keyEventMap = textInputKeyHandler; }
    var _a = useState(true), visible = _a[0], setVisible = _a[1];
    var ref = useRef(null);
    var handleEvent = function (e) {
        var _a;
        if (!((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            setVisible(false);
        }
    };
    var handleKeyEvents = function (e) {
        var nodeName = e.target.nodeName;
        switch (keyEventMap[e.key]) {
            case KeyEventModes.HIDE:
                setVisible(false);
                ref.current.blur();
                break;
            case KeyEventModes.FOCUS:
                if (document.activeElement !== ref.current &&
                    // Don't steal focus if the user types the focus shortcut in another text input.
                    nodeName !== 'INPUT' &&
                    nodeName !== 'TEXTAREA') {
                    ref.current.focus();
                    e.preventDefault();
                }
                break;
            default:
                break;
        }
    };
    React.useEffect(function () {
        document.addEventListener('click', handleEvent, true);
        document.addEventListener('keydown', handleKeyEvents, true);
        return function () {
            document.removeEventListener('click', handleEvent, true);
            document.removeEventListener('keydown', handleKeyEvents, true);
        };
    });
    return { ref: ref, setVisible: setVisible, visible: visible };
};
//# sourceMappingURL=useDocumentListener.js.map