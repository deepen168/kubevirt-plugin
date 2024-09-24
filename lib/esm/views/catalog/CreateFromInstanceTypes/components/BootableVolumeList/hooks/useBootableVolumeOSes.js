import { getBootVolumeOS } from '@catalog/CreateFromInstanceTypes/components/BootableVolumeList/utils/utils';
import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { isEmpty } from '@kubevirt-utils/utils/utils';
var useBootableVolumeOSes = function (bootableVolumes) {
    var types = bootableVolumes.reduce(function (acc, bv) {
        var operatingSystem = getBootVolumeOS(bv);
        acc.add(operatingSystem);
        return acc;
    }, new Set());
    return {
        hasRHEL: types.has(OS_NAME_TYPES.rhel),
        hasWindows: types.has(OS_NAME_TYPES.windows),
        isEmpty: isEmpty(types),
    };
};
export default useBootableVolumeOSes;
//# sourceMappingURL=useBootableVolumeOSes.js.map