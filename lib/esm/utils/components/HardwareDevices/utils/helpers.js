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
import { generatePrettyName, isEmpty } from '@kubevirt-utils/utils/utils';
export var getInitialDevices = function (initialDevices, type) {
    return (!isEmpty(initialDevices)
        ? initialDevices
        : [{ deviceName: '', name: generatePrettyName(type) }]).map(function (device, deviceIndex) { return (__assign(__assign({}, device), { deviceIndex: deviceIndex })); });
};
//# sourceMappingURL=helpers.js.map