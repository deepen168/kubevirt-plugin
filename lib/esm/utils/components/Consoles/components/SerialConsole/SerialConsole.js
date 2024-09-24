var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import LoadingEmptyState from '@kubevirt-utils/components/LoadingEmptyState/LoadingEmptyState';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, EmptyState, EmptyStateBody, EmptyStateFooter, } from '@patternfly/react-core';
import { PasteIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Consoles/SerialConsole';
import stylesVNC from '@patternfly/react-styles/css/components/Consoles/VncConsole';
import { ConsoleState } from '../utils/ConsoleConsts';
import useCopyPasteConsole from '../utils/hooks/useCopyPasteConsole';
import { XTerm } from './Xterm/Xterm';
import { SerialConsoleActions } from './SerialConsoleActions';
import '@patternfly/react-styles/css/components/Consoles/xterm.css';
import '@patternfly/react-styles/css/components/Consoles/SerialConsole.css';
import './SerialConsole.scss';
var connected = ConsoleState.connected, disconnected = ConsoleState.disconnected, loading = ConsoleState.loading;
var SerialConsole = function (_a) {
    var cols = _a.cols, fontFamily = _a.fontFamily, fontSize = _a.fontSize, innerRef = _a.innerRef, onConnect = _a.onConnect, onData = _a.onData, onDisconnect = _a.onDisconnect, _b = _a.onTitleChanged, onTitleChanged = _b === void 0 ? function () { return null; } : _b, rows = _a.rows, _c = _a.status, status = _c === void 0 ? loading : _c, textConnect = _a.textConnect, textDisconnect = _a.textDisconnect, textDisconnected = _a.textDisconnected, textLoading = _a.textLoading, textReset = _a.textReset;
    var t = useKubevirtTranslation().t;
    var pasteText = useCopyPasteConsole();
    useEffect(function () {
        onConnect();
        return function () {
            onDisconnect();
        };
    }, [onConnect, onDisconnect]);
    var focusTerminal = function () {
        var _a;
        (_a = innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) === null || _a === void 0 ? void 0 : _a.focusTerminal();
    };
    var onConnectClick = function () {
        onConnect();
        focusTerminal();
    };
    var onDisconnectClick = function () {
        onDisconnect();
        focusTerminal();
    };
    var onResetClick = function () {
        onDisconnect();
        onConnect();
        focusTerminal();
    };
    var onClipboardPaste = function () {
        try {
            navigator.clipboard.readText().then(function (clipboardText) { return onData(clipboardText); });
        }
        catch (_a) {
            onData(pasteText === null || pasteText === void 0 ? void 0 : pasteText.current);
        }
    };
    var terminal = null;
    switch (status) {
        case connected:
            terminal = (React.createElement(XTerm, { cols: cols, fontFamily: fontFamily, fontSize: fontSize, innerRef: innerRef, onData: onData, onTitleChanged: onTitleChanged, rows: rows }));
            break;
        case disconnected:
            terminal = (React.createElement(EmptyState, null,
                React.createElement(EmptyStateBody, null, textDisconnected || t('Click Connect to open serial console.')),
                React.createElement(EmptyStateFooter, null,
                    React.createElement(Button, { onClick: onConnectClick }, textConnect || t('Connect')))));
            break;
        case loading:
        default:
            terminal = React.createElement(LoadingEmptyState, { bodyContents: textLoading });
            break;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { icon: React.createElement("span", null,
                React.createElement(PasteIcon, null),
                " ",
                t('Paste')), 
            // Using VNC styles to avoid code dupe for paste button
            className: classNames('paste-from-clipboard-btn', stylesVNC.consoleActionsVnc), onClick: onClipboardPaste, variant: ButtonVariant.link }),
        status !== disconnected && (React.createElement(SerialConsoleActions, { onDisconnect: onDisconnectClick, onReset: onResetClick, textDisconnect: textDisconnect, textReset: textReset })),
        React.createElement("div", { className: css(styles.consoleSerial) }, terminal)));
};
SerialConsole.displayName = 'SerialConsole';
export default forwardRef(function (props, ref) { return (React.createElement(SerialConsole, __assign({ innerRef: ref }, props))); });
//# sourceMappingURL=SerialConsole.js.map