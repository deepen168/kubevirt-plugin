var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import cn from 'classnames';
import LoadingEmptyState from '@kubevirt-utils/components/LoadingEmptyState/LoadingEmptyState';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import KeyTable from '@novnc/novnc/core/input/keysym';
import RFBCreate from '@novnc/novnc/core/rfb';
import { initLogging } from '@novnc/novnc/core/util/logging';
import { Button, EmptyState, EmptyStateBody, EmptyStateFooter, Tab, Tabs, TabTitleText, } from '@patternfly/react-core';
import { sleep } from '../../utils/utils';
import { ConsoleState, WS, WSS } from '../utils/ConsoleConsts';
import useCopyPasteConsole from '../utils/hooks/useCopyPasteConsole';
import { isShiftKeyRequired } from './utils/util';
import VncConsoleActions from './VncConsoleActions';
import '@patternfly/react-styles/css/components/Consoles/VncConsole.css';
import './vnc-console.scss';
var connected = ConsoleState.connected, connecting = ConsoleState.connecting, disconnected = ConsoleState.disconnected;
export var VncConsole = function (_a) {
    var _b, _c, _d;
    var _e = _a.additionalButtons, additionalButtons = _e === void 0 ? [] : _e, _f = _a.autoConnect, autoConnect = _f === void 0 ? true : _f, children = _a.children, consoleContainerId = _a.consoleContainerId, credentials = _a.credentials, CustomConnectComponent = _a.CustomConnectComponent, CustomDisabledComponent = _a.CustomDisabledComponent, disabled = _a.disabled, _g = _a.encrypt, encrypt = _g === void 0 ? false : _g, hasGPU = _a.hasGPU, host = _a.host, onDisconnected = _a.onDisconnected, onInitFailed = _a.onInitFailed, onSecurityFailure = _a.onSecurityFailure, _h = _a.path, path = _h === void 0 ? '' : _h, _j = _a.port, port = _j === void 0 ? '80' : _j, _k = _a.repeaterID, repeaterID = _k === void 0 ? '' : _k, _l = _a.resizeSession, resizeSession = _l === void 0 ? true : _l, _m = _a.scaleViewport, scaleViewport = _m === void 0 ? false : _m, _o = _a.shared, shared = _o === void 0 ? false : _o, _p = _a.showAccessControls, showAccessControls = _p === void 0 ? true : _p, textConnect = _a.textConnect, textConnecting = _a.textConnecting, textCtrlAltDel = _a.textCtrlAltDel, textDisconnect = _a.textDisconnect, textDisconnected = _a.textDisconnected, textSendShortcut = _a.textSendShortcut, _q = _a.viewOnly, viewOnly = _q === void 0 ? false : _q, _r = _a.vncLogging, vncLogging = _r === void 0 ? 'warn' : _r;
    var t = useKubevirtTranslation().t;
    var _s = useState(), rfb = _s[0], setRfb = _s[1];
    var _t = useState(disconnected), status = _t[0], setStatus = _t[1];
    var _u = useState(0), activeTabKey = _u[0], setActiveTabKey = _u[1];
    var pasteText = useCopyPasteConsole();
    var staticRenderLocaitonRef = useRef(null);
    var StaticRenderLocaiton = useMemo(function () { return (React.createElement("div", { className: cn('vnc-container', { hide: status !== connected }), id: consoleContainerId, ref: staticRenderLocaitonRef })); }, [staticRenderLocaitonRef, consoleContainerId, status]);
    var url = useMemo(function () { return "".concat(encrypt ? WSS : WS, "://").concat(host, ":").concat(port, "/").concat(path); }, [encrypt, host, path, port]);
    var options = useMemo(function () { return ({
        credentials: credentials,
        repeaterID: repeaterID,
        shared: shared,
    }); }, [repeaterID, shared, credentials]);
    var connect = useCallback(function () {
        if (!disabled) {
            setStatus(connecting);
            setRfb(function () {
                var rfbInstnce = new RFBCreate(staticRenderLocaitonRef.current, url, options);
                rfbInstnce === null || rfbInstnce === void 0 ? void 0 : rfbInstnce.addEventListener('connect', function () { return setStatus(connected); });
                rfbInstnce === null || rfbInstnce === void 0 ? void 0 : rfbInstnce.addEventListener('disconnect', function (e) {
                    setStatus(disconnected);
                    onDisconnected === null || onDisconnected === void 0 ? void 0 : onDisconnected(e);
                });
                rfbInstnce === null || rfbInstnce === void 0 ? void 0 : rfbInstnce.addEventListener('securityfailure', function (e) {
                    setStatus(disconnected);
                    onSecurityFailure === null || onSecurityFailure === void 0 ? void 0 : onSecurityFailure(e);
                });
                rfbInstnce.sendCtrlAlt1 = function sendCtrlAlt1() {
                    if (this._rfbConnectionState !== connected || this._viewOnly) {
                        return;
                    }
                    this.sendKey(KeyTable.XK_Control_L, 'ControlLeft', true);
                    this.sendKey(KeyTable.XK_Alt_L, 'AltLeft', true);
                    this.sendKey(KeyTable.XK_1, 'One', true);
                    this.sendKey(KeyTable.XK_1, 'One', false);
                    this.sendKey(KeyTable.XK_Alt_L, 'AltLeft', false);
                    this.sendKey(KeyTable.XK_Control_L, 'ControlLeft', false);
                };
                rfbInstnce.sendCtrlAlt2 = function sendCtrlAlt2() {
                    if (this._rfbConnectionState !== connected || this._viewOnly) {
                        return;
                    }
                    this.sendKey(KeyTable.XK_Control_L, 'ControlLeft', true);
                    this.sendKey(KeyTable.XK_Alt_L, 'AltLeft', true);
                    this.sendKey(KeyTable.XK_2, 'Two', true);
                    this.sendKey(KeyTable.XK_2, 'Two', false);
                    this.sendKey(KeyTable.XK_Alt_L, 'AltLeft', false);
                    this.sendKey(KeyTable.XK_Control_L, 'ControlLeft', false);
                };
                rfbInstnce.sendPasteCMD = function sendPasteCMD() {
                    var _a, _b;
                    return __awaiter(this, void 0, void 0, function () {
                        var clipboardText, text, lastItem, i, char, shiftRequired;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (this._rfbConnectionState !== connected || this._viewOnly) {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, ((_b = (_a = navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) === null || _a === void 0 ? void 0 : _a.readText) === null || _b === void 0 ? void 0 : _b.call(_a))];
                                case 1:
                                    clipboardText = _c.sent();
                                    text = clipboardText || pasteText.current;
                                    lastItem = text.length - 1;
                                    i = 0;
                                    _c.label = 2;
                                case 2:
                                    if (!(i < text.length)) return [3 /*break*/, 5];
                                    char = text[i];
                                    shiftRequired = isShiftKeyRequired(char);
                                    return [4 /*yield*/, sleep(50)];
                                case 3:
                                    _c.sent();
                                    shiftRequired && this.sendKey(KeyTable.XK_Shift_L, 'ShiftLeft', true);
                                    this.sendKey(char.charCodeAt(0));
                                    shiftRequired && this.sendKey(KeyTable.XK_Shift_L, 'ShiftLeft', false);
                                    i === lastItem &&
                                        (clipboardText === null || clipboardText === void 0 ? void 0 : clipboardText.charCodeAt(lastItem)) === 13 &&
                                        this.sendKey(KeyTable.XK_KP_Enter);
                                    _c.label = 4;
                                case 4:
                                    i++;
                                    return [3 /*break*/, 2];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                };
                rfbInstnce.viewOnly = viewOnly;
                rfbInstnce.scaleViewport = scaleViewport;
                rfbInstnce.resizeSession = resizeSession;
                return rfbInstnce;
            });
        }
    }, [
        disabled,
        url,
        options,
        viewOnly,
        scaleViewport,
        resizeSession,
        onDisconnected,
        onSecurityFailure,
        pasteText,
    ]);
    useEffect(function () {
        if (!rfb && status === disconnected) {
            try {
                initLogging(vncLogging);
                autoConnect && connect();
            }
            catch (e) {
                onInitFailed === null || onInitFailed === void 0 ? void 0 : onInitFailed(e);
            }
        }
        return function () {
            if (rfb && status === connected) {
                rfb === null || rfb === void 0 ? void 0 : rfb.disconnect();
            }
        };
    }, [connect, onInitFailed, vncLogging, rfb, status, autoConnect]);
    if (disabled) {
        return (React.createElement(EmptyState, { className: "pf-c-console__vnc" },
            React.createElement(EmptyStateBody, null, CustomDisabledComponent || t('Console is disabled'))));
    }
    return (React.createElement(React.Fragment, null,
        status === connected && showAccessControls && (React.createElement(VncConsoleActions, { customButtons: [
                {
                    onClick: function () { return rfb === null || rfb === void 0 ? void 0 : rfb.sendCtrlAltDel(); },
                    text: textCtrlAltDel || 'Ctrl + Alt + Delete',
                },
                {
                    onClick: function () { return rfb === null || rfb === void 0 ? void 0 : rfb.sendCtrlAlt1(); },
                    text: 'Ctrl + Alt + 1',
                },
                {
                    onClick: function () { return rfb === null || rfb === void 0 ? void 0 : rfb.sendCtrlAlt2(); },
                    text: 'Ctrl + Alt + 2',
                },
            ], onInjectTextFromClipboard: function (e) {
                e.currentTarget.blur();
                e.preventDefault();
                rfb === null || rfb === void 0 ? void 0 : rfb.sendPasteCMD();
            }, additionalButtons: additionalButtons, onDisconnect: function () { return rfb === null || rfb === void 0 ? void 0 : rfb.disconnect(); }, textDisconnect: textDisconnect, textSendShortcut: textSendShortcut })),
        React.createElement("div", { className: "pf-c-console__vnc" },
            children,
            status === disconnected &&
                (CustomConnectComponent ? (React.createElement(CustomConnectComponent, { connect: connect })) : (React.createElement(EmptyState, null,
                    React.createElement(EmptyStateBody, null, textDisconnected || t('Click Connect to open the VNC console.')),
                    React.createElement(EmptyStateFooter, null,
                        React.createElement(Button, { onClick: connect, variant: "primary" }, textConnect || t('Connect')))))),
            status === connecting && (React.createElement(LoadingEmptyState, { bodyContents: textConnecting || t('Connecting') })),
            hasGPU && status === connected && (React.createElement("div", { className: "vnc-screen-tabs" },
                React.createElement(Tabs, { style: {
                        width: (_d = (_c = (_b = staticRenderLocaitonRef === null || staticRenderLocaitonRef === void 0 ? void 0 : staticRenderLocaitonRef.current) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.width,
                    }, activeKey: activeTabKey },
                    React.createElement(Tab, { onClick: function () {
                            rfb === null || rfb === void 0 ? void 0 : rfb.sendCtrlAlt1();
                            setActiveTabKey(0);
                        }, eventKey: 0, title: React.createElement(TabTitleText, null, t('Screen 1')) }),
                    React.createElement(Tab, { onClick: function () {
                            rfb === null || rfb === void 0 ? void 0 : rfb.sendCtrlAlt2();
                            setActiveTabKey(1);
                        }, eventKey: 1, title: React.createElement(TabTitleText, null, t('Screen 2')) })))),
            StaticRenderLocaiton)));
};
export default VncConsole;
//# sourceMappingURL=VncConsole.js.map