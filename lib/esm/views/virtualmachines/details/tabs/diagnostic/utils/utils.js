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
import { v4 as uuidv4 } from 'uuid';
import { DataVolumeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
export var volumeSnapshotStatusesTransformer = function (volumeSnapshotStatuses) {
    if (volumeSnapshotStatuses === void 0) { volumeSnapshotStatuses = []; }
    return volumeSnapshotStatuses.map(function (vss) {
        var _a, _b, _c, _d, _e;
        var copyVSS = __assign(__assign({}, vss), { metadata: { condition: 'Other', type: 'Storage' } });
        copyVSS.status = vss === null || vss === void 0 ? void 0 : vss.enabled;
        var index = (_a = vss === null || vss === void 0 ? void 0 : vss.reason) === null || _a === void 0 ? void 0 : _a.indexOf(':');
        copyVSS.metadata.name = (vss === null || vss === void 0 ? void 0 : vss.reason) || (vss === null || vss === void 0 ? void 0 : vss.name);
        if (index !== -1) {
            copyVSS.reason = (_b = vss === null || vss === void 0 ? void 0 : vss.reason) === null || _b === void 0 ? void 0 : _b.slice(0, index);
            copyVSS.message = (_c = vss === null || vss === void 0 ? void 0 : vss.reason) === null || _c === void 0 ? void 0 : _c.slice(index + 1, (_d = vss === null || vss === void 0 ? void 0 : vss.reason) === null || _d === void 0 ? void 0 : _d.length);
            copyVSS.metadata.name = (_e = vss === null || vss === void 0 ? void 0 : vss.reason) === null || _e === void 0 ? void 0 : _e.slice(0, index);
        }
        if (!(copyVSS === null || copyVSS === void 0 ? void 0 : copyVSS.message)) {
            copyVSS.message = copyVSS.reason;
            copyVSS.reason = copyVSS.name;
        }
        copyVSS.id = uuidv4();
        return __assign({}, copyVSS);
    });
};
export var conditionsTransformer = function (conditions) {
    if (conditions === void 0) { conditions = []; }
    return conditions === null || conditions === void 0 ? void 0 : conditions.map(function (condition) {
        var id = uuidv4();
        var copyConditions = __assign(__assign({}, condition), { id: id, metadata: {
                condition: (condition === null || condition === void 0 ? void 0 : condition.status) === 'False' ? 'Error' : 'Other',
                name: (condition === null || condition === void 0 ? void 0 : condition.reason) || (condition === null || condition === void 0 ? void 0 : condition.type),
                type: 'VirtualMachines',
            } });
        return copyConditions;
    });
};
export var buildDVStatus = function (data) {
    var elements = Object.values(data).map(function (dv) { return dv.data; });
    return elements.map(function (element) {
        var _a, _b, _c, _d, _e, _f;
        var conditions = (_a = element === null || element === void 0 ? void 0 : element.status) === null || _a === void 0 ? void 0 : _a.conditions;
        var message = (_b = conditions === null || conditions === void 0 ? void 0 : conditions[conditions.length - 1]) === null || _b === void 0 ? void 0 : _b.message;
        return {
            id: (_c = element === null || element === void 0 ? void 0 : element.metadata) === null || _c === void 0 ? void 0 : _c.uid,
            message: message,
            name: (_d = element === null || element === void 0 ? void 0 : element.metadata) === null || _d === void 0 ? void 0 : _d.name,
            phase: (_e = element === null || element === void 0 ? void 0 : element.status) === null || _e === void 0 ? void 0 : _e.phase,
            progress: (_f = element === null || element === void 0 ? void 0 : element.status) === null || _f === void 0 ? void 0 : _f.progress,
        };
    });
};
var getDataVolumesNames = function (vm) {
    var _a, _b, _c;
    return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.volumes.filter(function (volume) { return volume === null || volume === void 0 ? void 0 : volume.dataVolume; }).map(function (volume) { var _a; return (_a = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _a === void 0 ? void 0 : _a.name; });
};
export var buildDataVolumeResources = function (vm) {
    var _a;
    return Object.fromEntries(((_a = getDataVolumesNames(vm)) === null || _a === void 0 ? void 0 : _a.map(function (name) {
        var _a;
        return [
            name,
            {
                groupVersionKind: DataVolumeModelGroupVersionKind,
                name: name,
                namespace: (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
            },
        ];
    })) || []);
};
export var createURLDiagnostic = function (str, append) {
    var urlSpitted = str.split('/');
    if (urlSpitted[urlSpitted.length - 1] === VirtualMachineDetailsTab.Logs ||
        urlSpitted[urlSpitted.length - 1] === VirtualMachineDetailsTab.Tables) {
        urlSpitted.pop();
        urlSpitted.push(append);
        return urlSpitted.join('/');
    }
    return str.concat('/' + append);
};
//# sourceMappingURL=utils.js.map