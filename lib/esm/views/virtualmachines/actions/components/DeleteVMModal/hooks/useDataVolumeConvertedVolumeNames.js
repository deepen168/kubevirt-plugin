import { CDIConfigModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useDataVolumeConvertedVolumeNames = function (vmVolumes) {
    var _a, _b;
    var cdiConfig = useK8sWatchResource({
        groupVersionKind: CDIConfigModelGroupVersionKind,
        isList: false,
        namespaced: false,
    })[0];
    var isDataVolumeGarbageCollector = ((_a = cdiConfig === null || cdiConfig === void 0 ? void 0 : cdiConfig.spec) === null || _a === void 0 ? void 0 : _a.dataVolumeTTLSeconds) !== -1;
    var dvVolumesNames = (_b = (vmVolumes || [])
        .filter(function (volume) { return volume === null || volume === void 0 ? void 0 : volume.dataVolume; })) === null || _b === void 0 ? void 0 : _b.map(function (volume) { var _a; return (_a = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _a === void 0 ? void 0 : _a.name; });
    return {
        dvVolumesNames: dvVolumesNames,
        isDataVolumeGarbageCollector: isDataVolumeGarbageCollector,
    };
};
export default useDataVolumeConvertedVolumeNames;
//# sourceMappingURL=useDataVolumeConvertedVolumeNames.js.map