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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c, _d, _e, _f;
import { createVMFlowTypes } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { getName } from '@kubevirt-utils/resources/shared';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
var SEGMENT_KEY = ((_b = (_a = window.SERVER_FLAGS) === null || _a === void 0 ? void 0 : _a.telemetry) === null || _b === void 0 ? void 0 : _b.DEVSANDBOX_SEGMENT_API_KEY) ||
    ((_d = (_c = window.SERVER_FLAGS) === null || _c === void 0 ? void 0 : _c.telemetry) === null || _d === void 0 ? void 0 : _d.SEGMENT_API_KEY) ||
    ((_f = (_e = window.SERVER_FLAGS) === null || _e === void 0 ? void 0 : _e.telemetry) === null || _f === void 0 ? void 0 : _f.SEGMENT_PUBLIC_API_KEY) ||
    '';
var initSegment = function () {
    var analytics = (window.analytics = window.analytics || []);
    if (analytics.initialize) {
        return;
    }
    if (analytics.invoked)
        window.console &&
            kubevirtConsole.error &&
            kubevirtConsole.error('Segment snippet included twice.');
    else {
        analytics.invoked = true;
        analytics.methods = [
            'trackSubmit',
            'trackClick',
            'trackLink',
            'trackForm',
            'pageview',
            'identify',
            'reset',
            'group',
            'track',
            'ready',
            'alias',
            'debug',
            'page',
            'once',
            'off',
            'on',
            'addSourceMiddleware',
            'addIntegrationMiddleware',
            'setAnonymousId',
            'addDestinationMiddleware',
        ];
        analytics.factory = function (e) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var t = Array.prototype.slice.call(args);
                t.unshift(e);
                analytics.push(t);
                return analytics;
            };
        };
        for (var e = 0; e < analytics.methods.length; e++) {
            var key = analytics.methods[e];
            analytics[key] = analytics.factory(key);
        }
        analytics.load = function (key, e) {
            var t = document.createElement('script');
            t.type = 'text/javascript';
            t.async = true;
            t.src =
                'https://cdn.segment.com/analytics.js/v1/' + encodeURIComponent(key) + '/analytics.min.js';
            var n = document.getElementsByTagName('script')[0];
            if (n.parentNode) {
                n.parentNode.insertBefore(t, n);
            }
            analytics._loadOptions = e;
        };
        analytics.SNIPPET_VERSION = '4.13.1';
        if (SEGMENT_KEY) {
            analytics.load(SEGMENT_KEY);
        }
    }
};
initSegment();
export var eventMonitor = function (eventType, properties) { return __awaiter(void 0, void 0, void 0, function () {
    var anonymousIP, _a, user, otherProperties, uid, username, id, anonymousIdBuffer, anonymousIdArray, anonymousId;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                anonymousIP = {
                    context: {
                        ip: '0.0.0.0',
                    },
                };
                _a = eventType;
                switch (_a) {
                    case 'identify': return [3 /*break*/, 1];
                    case 'page': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 4];
            case 1:
                user = properties.user, otherProperties = __rest(properties, ["user"]);
                uid = (user === null || user === void 0 ? void 0 : user.uid) || ((_b = user === null || user === void 0 ? void 0 : user.metadata) === null || _b === void 0 ? void 0 : _b.uid);
                username = (user === null || user === void 0 ? void 0 : user.username) || ((_c = user === null || user === void 0 ? void 0 : user.metadata) === null || _c === void 0 ? void 0 : _c.name);
                id = uid || "".concat(location.host, "-").concat(username);
                return [4 /*yield*/, crypto.subtle.digest('SHA-1', new TextEncoder().encode(id))];
            case 2:
                anonymousIdBuffer = _d.sent();
                anonymousIdArray = Array.from(new Uint8Array(anonymousIdBuffer));
                anonymousId = anonymousIdArray.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
                window.analytics.identify(anonymousId, otherProperties, anonymousIP);
                return [3 /*break*/, 5];
            case 3:
                {
                    window.analytics.page(undefined, properties, anonymousIP);
                    return [3 /*break*/, 5];
                }
                _d.label = 4;
            case 4:
                {
                    window.analytics.track(eventType, properties, anonymousIP);
                }
                _d.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
export var logEventWithName = function (key, vm, properties) {
    eventMonitor(key, __assign(__assign({}, properties), (vm && { vmName: getName(vm) })));
};
export var logITFlowEvent = function (key, vm, properties) { return logEventWithName(key, vm, __assign(__assign({}, properties), { flow: createVMFlowTypes.InstanceTypes })); };
export var logTemplateFlowEvent = function (key, template, properties) {
    return eventMonitor(key, __assign(__assign({}, properties), { flow: createVMFlowTypes.Template, templateName: getName(template) }));
};
//# sourceMappingURL=telemetry.js.map