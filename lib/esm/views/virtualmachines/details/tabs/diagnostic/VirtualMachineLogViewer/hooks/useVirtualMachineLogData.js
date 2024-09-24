var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Buffer } from 'buffer';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
var useVirtualMachineLogData = function (_a) {
    var _b, _c, _d;
    var _e = _a.connect, connect = _e === void 0 ? true : _e, pod = _a.pod;
    var url = "/api/kubernetes/api/v1/namespaces/".concat((_b = pod === null || pod === void 0 ? void 0 : pod.metadata) === null || _b === void 0 ? void 0 : _b.namespace, "/pods/").concat((_c = pod === null || pod === void 0 ? void 0 : pod.metadata) === null || _c === void 0 ? void 0 : _c.name, "/log");
    var socket = useWebSocket("".concat(window.location.protocol === 'https:' ? 'wss' : 'ws', "://").concat(window.location.host).concat(url), {
        onClose: function () { return kubevirtConsole.log('websocket closed kubevirt: ', url); },
        onError: function (err) { return kubevirtConsole.log('Websocket error kubevirt:', err); },
        onOpen: function () { return kubevirtConsole.log('websocket open kubevirt: ', url); },
        protocols: ['base64.binary.k8s.io'],
        queryParams: {
            container: 'guest-console-log',
            follow: 'true',
        },
        retryOnError: true,
    }, connect);
    var _f = useState([]), data = _f[0], setData = _f[1];
    useEffect(function () {
        var _a, _b;
        if ((_a = socket.lastMessage) === null || _a === void 0 ? void 0 : _a.data) {
            var text = Buffer.from((_b = socket.lastMessage) === null || _b === void 0 ? void 0 : _b.data, 'base64').toString();
            var split_1 = text.split('\n');
            setData(function (prevData) {
                return __spreadArray(__spreadArray([], prevData, true), split_1, true);
            });
        }
        if (!connect)
            setData([]);
    }, [socket.lastJsonMessage, (_d = socket.lastMessage) === null || _d === void 0 ? void 0 : _d.data, connect]);
    return { data: data };
};
export default useVirtualMachineLogData;
//# sourceMappingURL=useVirtualMachineLogData.js.map