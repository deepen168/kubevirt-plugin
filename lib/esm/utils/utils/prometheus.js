var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { murmur3 } from 'murmurhash-js';
import { KUBEVIRT } from '@kubevirt-utils/constants/constants';
import { MONITORING_SALT, OPERATOR_LABEL_KEY } from '@kubevirt-utils/constants/prometheus';
export var generateAlertId = function (group, rule) {
    var key = __spreadArray([
        group === null || group === void 0 ? void 0 : group.file,
        group === null || group === void 0 ? void 0 : group.name,
        rule === null || rule === void 0 ? void 0 : rule.name,
        rule === null || rule === void 0 ? void 0 : rule.duration,
        rule === null || rule === void 0 ? void 0 : rule.query
    ], Object === null || Object === void 0 ? void 0 : Object.entries(rule === null || rule === void 0 ? void 0 : rule.labels).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "".concat(v, "=").concat(k);
    }), true).join(',');
    return String(murmur3(key, MONITORING_SALT));
};
export var labelsToParams = function (labels) {
    return Object.entries(labels)
        .map(function (_a) {
        var k = _a[0], v = _a[1];
        return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v));
    })
        .join('&');
};
export var isKubeVirtAlert = function (alert) { var _a; return ((_a = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _a === void 0 ? void 0 : _a[OPERATOR_LABEL_KEY]) === KUBEVIRT; };
export var inNamespace = function (namespace, alert) { var _a; return ((_a = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _a === void 0 ? void 0 : _a.namespace) === namespace; };
//# sourceMappingURL=prometheus.js.map