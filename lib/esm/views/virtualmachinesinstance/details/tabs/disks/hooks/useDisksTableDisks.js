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
import * as React from 'react';
import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { diskStructureCreator, } from './../utils/virtualMachinesInstancePageDisksTabUtils';
var useDisksTableDisks = function (vmi) {
    var _a, _b, _c, _d, _e;
    var vmiDisks = (_c = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices) === null || _c === void 0 ? void 0 : _c.disks;
    var vmiVolumes = (_d = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _d === void 0 ? void 0 : _d.volumes;
    var _f = useK8sWatchResource({
        isList: true,
        kind: PersistentVolumeClaimModel.kind,
        namespace: (_e = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _e === void 0 ? void 0 : _e.namespace,
        namespaced: true,
    }), pvcs = _f[0], loaded = _f[1], loadingError = _f[2];
    var disks = React.useMemo(function () {
        var diskDevices = vmiVolumes === null || vmiVolumes === void 0 ? void 0 : vmiVolumes.map(function (volume) {
            var disk = vmiDisks === null || vmiDisks === void 0 ? void 0 : vmiDisks.find(function (_a) {
                var name = _a.name;
                return name === volume.name;
            });
            var pvc = pvcs === null || pvcs === void 0 ? void 0 : pvcs.find(function (_a) {
                var _b, _c;
                var metadata = _a.metadata;
                return metadata.name === ((_b = volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) === null || _b === void 0 ? void 0 : _b.claimName) ||
                    metadata.name === ((_c = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _c === void 0 ? void 0 : _c.name);
            });
            return __assign(__assign({}, disk), { pvc: pvc });
        });
        return diskStructureCreator(diskDevices);
    }, [pvcs, vmiDisks, vmiVolumes]);
    return [disks || [], loaded, loadingError];
};
export default useDisksTableDisks;
//# sourceMappingURL=useDisksTableDisks.js.map