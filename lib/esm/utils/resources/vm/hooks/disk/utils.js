import { modelToGroupVersionKind, PersistentVolumeClaimModel } from '@kubevirt-utils/models';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { getDataVolumeTemplates, getVolumes } from '../../utils';
var PersistentVolumeClaimGroupVersionKind = modelToGroupVersionKind(PersistentVolumeClaimModel);
export var getPVCWatch = function (vm) {
    var _a;
    var pvcSources = (_a = getDataVolumeTemplates(vm)) === null || _a === void 0 ? void 0 : _a.map(function (dataVolume) { return ({
        name: getName(dataVolume),
        namespace: getNamespace(vm),
    }); });
    pvcSources.push.apply(pvcSources, (getVolumes(vm) || [])
        .map(function (volume) { var _a; return (_a = volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) === null || _a === void 0 ? void 0 : _a.claimName; })
        .filter(function (claimName) { return Boolean(claimName); })
        .map(function (claimName) {
        return ({ name: claimName, namespace: getNamespace(vm) });
    }));
    return pvcSources
        .filter(function (pvcSource) { return !isEmpty(pvcSource); })
        .reduce(function (acc, pvcSource) {
        acc["".concat(pvcSource.name, "-").concat(pvcSource.namespace)] = {
            groupVersionKind: PersistentVolumeClaimGroupVersionKind,
            name: pvcSource.name,
            namespace: pvcSource.namespace,
        };
        return acc;
    }, {});
};
//# sourceMappingURL=utils.js.map