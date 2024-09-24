import { DataVolumeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { getNamespace, getVMStatus } from '@kubevirt-utils/resources/shared';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { printableVMStatus } from '@virtualmachines/utils';
var useProvisioningPercentage = function (vm) {
    var volumes = getVolumes(vm);
    var namespace = getNamespace(vm);
    var dataVolumeNames = (volumes === null || volumes === void 0 ? void 0 : volumes.filter(function (v) { return v.dataVolume; }).map(function (dvVolume) { var _a; return (_a = dvVolume.dataVolume) === null || _a === void 0 ? void 0 : _a.name; })) || [];
    var watchRequest = dataVolumeNames.reduce(function (acc, current) {
        acc[current] = {
            groupVersionKind: DataVolumeModelGroupVersionKind,
            name: current,
            namespace: namespace,
        };
        return acc;
    }, {});
    var vmPrintableStatus = getVMStatus(vm);
    var dataVolumeWatch = useK8sWatchResources(vmPrintableStatus === printableVMStatus.Provisioning ? watchRequest : {});
    var loaded = Object.values(dataVolumeWatch || {}).every(function (watchResource) { return watchResource.loaded || watchResource.loadError; });
    var percentages = Object.keys(dataVolumeWatch || {}).reduce(function (acc, dataVolumeName) {
        var _a, _b, _c;
        acc[dataVolumeName] = (_c = (_b = (_a = dataVolumeWatch[dataVolumeName]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.progress;
        return acc;
    }, {});
    return { loaded: loaded, percentages: percentages };
};
export default useProvisioningPercentage;
//# sourceMappingURL=useProvisioningPercentage.js.map