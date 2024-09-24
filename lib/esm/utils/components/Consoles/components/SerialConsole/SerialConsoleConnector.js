import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { WSFactory } from '@openshift-console/dynamic-plugin-sdk/lib/utils/k8s/ws-factory';
import { INSECURE, SECURE } from '../../utils/constants';
import { isConnectionEncrypted } from '../../utils/utils';
import { ConsoleState, WS, WSS } from '../utils/ConsoleConsts';
import SerialConsole from './SerialConsole';
var connected = ConsoleState.connected, disconnected = ConsoleState.disconnected, loading = ConsoleState.loading;
var SerialConsoleConnector = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = React.useState(loading), status = _b[0], setStatus = _b[1];
    var terminalRef = React.useRef(null);
    var socket = React.useRef(null);
    var onBackendDisconnected = React.useCallback(function () {
        var _a;
        if (terminalRef.current) {
            terminalRef.current.onConnectionClosed('Reason for disconnect provided by backend.');
        }
        (_a = socket === null || socket === void 0 ? void 0 : socket.current) === null || _a === void 0 ? void 0 : _a.destroy();
        setStatus(disconnected); // will close the terminal window
    }, []);
    var setConnected = React.useCallback(function () {
        setStatus(connected);
    }, [setStatus]);
    var onDataFromBackend = React.useCallback(function (data) {
        if (terminalRef.current) {
            var reader = new FileReader();
            reader.addEventListener('loadend', function (e) {
                // Blob to text transformation ...
                var target = (e.target || e.srcElement);
                var text = target.result;
                terminalRef.current.onDataReceived(text);
            });
            reader.readAsText(data);
        }
    }, []);
    var onConnect = React.useCallback(function () {
        var _a, _b, _c;
        if (socket.current) {
            socket.current.destroy();
            setStatus(loading);
        }
        var websocketOptions = {
            host: "".concat(isConnectionEncrypted() ? WSS : WS, "://").concat(window.location.hostname, ":").concat(window.location.port || (isConnectionEncrypted() ? SECURE : INSECURE)),
            jsonParse: false,
            path: "/api/kubernetes/apis/subresources.kubevirt.io/v1/namespaces/".concat((_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.namespace, "/virtualmachineinstances/").concat((_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.name, "/console"),
            reconnect: false,
            subprotocols: ['plain.kubevirt.io'],
        };
        socket.current = new WSFactory("".concat((_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.name, "-serial"), websocketOptions)
            .onmessage(onDataFromBackend)
            .onopen(setConnected)
            .onclose(onBackendDisconnected)
            .onerror(function (event) {
            kubevirtConsole.log('WebSocket error received: ', event);
        });
    }, [onDataFromBackend, setConnected, vmi, onBackendDisconnected]);
    var onData = React.useCallback(function (data) {
        var _a;
        // data is resent back from backend so _will_ pass through onDataFromBackend
        (_a = socket === null || socket === void 0 ? void 0 : socket.current) === null || _a === void 0 ? void 0 : _a.send(new Blob([data]));
    }, []);
    return (React.createElement(SerialConsole, { fontFamily: "monospace", fontSize: 12, onConnect: onConnect, onData: onData, onDisconnect: onBackendDisconnected, ref: terminalRef, status: status, textConnect: t('Connect'), textDisconnect: t('Disconnect'), textDisconnected: t('Click Connect to open serial console.'), textLoading: t('Loading ...'), textReset: t('Reset') }));
};
export default SerialConsoleConnector;
//# sourceMappingURL=SerialConsoleConnector.js.map