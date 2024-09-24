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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isEmpty, kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { CUSTOMIZE_INSTANCE_TYPE_SESSION_STORAGE_KEY } from './const';
export var saveCustomizeInstanceTypeSessionStorage = function (vm) {
    sessionStorage.setItem(CUSTOMIZE_INSTANCE_TYPE_SESSION_STORAGE_KEY, JSON.stringify(vm));
};
export var getCustomizeInstanceTypeSessionStorage = function () {
    var vmString = sessionStorage.getItem(CUSTOMIZE_INSTANCE_TYPE_SESSION_STORAGE_KEY);
    if (!isEmpty(vmString)) {
        try {
            var vm = JSON.parse(vmString);
            return vm;
        }
        catch (error) {
            kubevirtConsole.log('Error parsing vm session storage');
        }
    }
    return null;
};
export var mergeData = function (seedData, appendData) {
    return Array.isArray(seedData) || Array.isArray(appendData)
        ? __spreadArray(__spreadArray([], (seedData || []), true), (appendData || []), true) : __assign(__assign({}, (seedData || {})), (appendData || {}));
};
//# sourceMappingURL=utils.js.map