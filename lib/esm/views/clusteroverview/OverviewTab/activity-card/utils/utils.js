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
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
export var eventTypes = [
    VirtualMachineModel.kind,
    VirtualMachineInstanceModel.kind,
    'HyperConverged',
];
export var asUniqueResource = function (resource, prefix) { return (__assign(__assign({}, resource), { prop: "".concat(prefix, "-").concat(resource.prop) })); };
export var asWatchK8sResource = function (resource) {
    return __assign(__assign({}, resource), { isList: (resource === null || resource === void 0 ? void 0 : resource.isList) || true });
};
//# sourceMappingURL=utils.js.map