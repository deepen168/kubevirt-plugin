import * as React from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { canUseDOM, debounce } from '@patternfly/react-core';
import { onFocusIn, onFocusOut } from './utils/Xterm';
export var XTerm = function (_a) {
    var _b = _a.cols, cols = _b === void 0 ? 80 : _b, fontFamily = _a.fontFamily, fontSize = _a.fontSize, innerRef = _a.innerRef, onData = _a.onData, onTitleChanged = _a.onTitleChanged, _c = _a.rows, rows = _c === void 0 ? 25 : _c;
    var terminal = React.useState(new Terminal({
        cols: cols,
        cursorBlink: true,
        fontFamily: fontFamily,
        fontSize: fontSize,
        rows: rows,
        screenReaderMode: true,
    }))[0];
    var ref = React.useRef();
    React.useImperativeHandle(innerRef, function () { return ({
        // eslint-disable-next-line require-jsdoc
        focusterminall: function () {
            if (terminal) {
                terminal === null || terminal === void 0 ? void 0 : terminal.focus();
            }
        },
        /**
         * Backend closed connection.
         *
         * @param {string} reason String error to be written into the terminall
         */
        onConnectionClosed: function (reason) {
            if (terminal) {
                terminal === null || terminal === void 0 ? void 0 : terminal.write("\u001B[31m".concat(reason || 'disconnected', "\u001B[m\r\n"));
                terminal === null || terminal === void 0 ? void 0 : terminal.refresh(terminal.rows, terminal.rows); // start to end row
            }
        },
        /**
         * Backend sent data.
         *
         * @param {string} data String content to be writen into the terminall
         */
        onDataReceived: function (data) {
            if (terminal) {
                terminal === null || terminal === void 0 ? void 0 : terminal.write(data);
            }
        },
    }); });
    React.useEffect(function () {
        var fitAddon = new FitAddon();
        onData && (terminal === null || terminal === void 0 ? void 0 : terminal.onData(onData));
        onTitleChanged && (terminal === null || terminal === void 0 ? void 0 : terminal.onTitleChange(onTitleChanged));
        terminal === null || terminal === void 0 ? void 0 : terminal.loadAddon(fitAddon);
        terminal === null || terminal === void 0 ? void 0 : terminal.open(ref === null || ref === void 0 ? void 0 : ref.current);
        var resizeListener = debounce(fitAddon === null || fitAddon === void 0 ? void 0 : fitAddon.fit, 100);
        canUseDOM && window.addEventListener('resize', resizeListener);
        fitAddon === null || fitAddon === void 0 ? void 0 : fitAddon.fit();
        return function () {
            terminal.dispose();
            canUseDOM && window.removeEventListener('resize', resizeListener);
            onFocusOut();
        };
    }, [onData, onTitleChanged, terminal]);
    return (React.createElement("div", { className: "pf-c-console__xterm", onBlur: onFocusOut, onFocus: onFocusIn, ref: ref, role: "list" }));
};
XTerm.displayName = 'XTerm';
//# sourceMappingURL=Xterm.js.map