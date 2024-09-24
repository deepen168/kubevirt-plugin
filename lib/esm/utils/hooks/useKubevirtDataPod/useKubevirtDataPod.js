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
import { useEffect, useMemo, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { isEmpty, kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { consoleFetch, } from '@openshift-console/dynamic-plugin-sdk';
import useDeepCompareMemoize from '../useDeepCompareMemoize/useDeepCompareMemoize';
import { compareNameAndNamespace, constructURL, getResourceVersion, registerResourceVersion, } from './utils/utils';
import useKubevirtDataPodFilters from './useKubevirtDataPodFilters';
var useKubevirtDataPod = function (watchOptions, filterOptions) {
    var _a = useState([]), data = _a[0], setData = _a[1];
    var _b = useState(false), loaded = _b[0], setLoaded = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    var _d = useState(null), resourceVersion = _d[0], setResourceVersion = _d[1];
    var query = useKubevirtDataPodFilters(filterOptions);
    var watchOptionsMemoized = useDeepCompareMemoize(watchOptions, true);
    var url = useMemo(function () { return constructURL(watchOptionsMemoized, query); }, [query, watchOptionsMemoized]);
    var _e = useState(false), shouldConnect = _e[0], setShouldConnect = _e[1];
    var socket = useWebSocket("".concat(window.location.protocol === 'https:' ? 'wss' : 'ws', "://").concat(window.location.host).concat(url), {
        onClose: function () { return kubevirtConsole.log('websocket closed kubevirt: ', url); },
        onError: function (err) { return kubevirtConsole.log('Websocket error kubevirt:', err); },
        onOpen: function () { return kubevirtConsole.log('websocket open kubevirt: ', url); },
        queryParams: {
            cluster: 'local-cluster',
            resourceVersion: resourceVersion,
            watch: 'true',
            // fieldSelector: 'metadata.name=?',
        },
        share: true,
    }, shouldConnect && Boolean(resourceVersion));
    useEffect(function () {
        var fetch = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, jsonData, e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setLoaded(false);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, consoleFetch(url)];
                    case 2:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        jsonData = _b.sent();
                        registerResourceVersion(watchOptionsMemoized.groupVersionKind.kind, (_a = jsonData === null || jsonData === void 0 ? void 0 : jsonData.metadata) === null || _a === void 0 ? void 0 : _a.resourceVersion);
                        setResourceVersion(getResourceVersion(watchOptionsMemoized.groupVersionKind.kind));
                        setData(jsonData);
                        setShouldConnect(true);
                        setLoaded(true);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _b.sent();
                        setError(new Error(e_1.msg));
                        setLoaded(true);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        !isEmpty(watchOptionsMemoized) && fetch();
    }, [watchOptionsMemoized, url, query]);
    useEffect(function () {
        var _a, _b, _c;
        if (((_a = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _a === void 0 ? void 0 : _a.type) == 'ADDED') {
            setData(function (prevData) {
                var _a, _b;
                (_a = prevData === null || prevData === void 0 ? void 0 : prevData.items) === null || _a === void 0 ? void 0 : _a.push((_b = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _b === void 0 ? void 0 : _b.object);
                return prevData;
            });
            return;
        }
        if (((_b = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _b === void 0 ? void 0 : _b.type) == 'DELETED') {
            setData(function (prevData) {
                var _a;
                var filteredItems = (_a = prevData === null || prevData === void 0 ? void 0 : prevData.items) === null || _a === void 0 ? void 0 : _a.filter(function (item) { var _a; return !compareNameAndNamespace(item, (_a = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _a === void 0 ? void 0 : _a.object); });
                return __assign(__assign({}, prevData), { items: filteredItems });
            });
            return;
        }
        if ((_c = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _c === void 0 ? void 0 : _c.object) {
            setData(function (prevData) {
                var _a;
                var newData = prevData === null || prevData === void 0 ? void 0 : prevData.items.map(function (item) {
                    var _a, _b;
                    if (compareNameAndNamespace(item, (_a = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _a === void 0 ? void 0 : _a.object)) {
                        return (_b = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _b === void 0 ? void 0 : _b.object;
                    }
                    return item;
                });
                return !isEmpty(newData)
                    ? __assign(__assign({}, prevData), { items: newData }) : (_a = socket === null || socket === void 0 ? void 0 : socket.lastJsonMessage) === null || _a === void 0 ? void 0 : _a.object;
            });
        }
    }, [socket.lastJsonMessage]);
    if (!watchOptions)
        return [[], false, null];
    return [data, loaded, error];
};
export default useKubevirtDataPod;
//# sourceMappingURL=useKubevirtDataPod.js.map