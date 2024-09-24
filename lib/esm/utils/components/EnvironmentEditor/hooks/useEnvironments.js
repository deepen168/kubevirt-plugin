import { useCallback, useEffect, useMemo, useState } from 'react';
import { InterfaceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { isWindows } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { ensurePath, getRandomChars } from '@kubevirt-utils/utils/utils';
import { areEnvironmentsChanged, getRandomSerial, getVMEnvironmentsVariables, updateVolumeForKind, } from '../utils';
var useEnvironments = function (vm, originalVM, updateVM, onEditChange) {
    var isWindowsVM = useMemo(function () { return isWindows(originalVM); }, [originalVM]);
    var t = useKubevirtTranslation().t;
    var _a = useState(), error = _a[0], setError = _a[1];
    var _b = useState(false), edited = _b[0], setEdited = _b[1];
    var originalEnvironments = useMemo(function () { return getVMEnvironmentsVariables(originalVM); }, [originalVM]);
    var environments = useMemo(function () { return getVMEnvironmentsVariables(vm); }, [vm]);
    useEffect(function () {
        var envsEdited = areEnvironmentsChanged(environments, originalEnvironments);
        if (envsEdited !== edited) {
            setEdited(envsEdited);
            if (onEditChange)
                onEditChange(envsEdited);
        }
    }, [edited, environments, onEditChange, originalEnvironments]);
    var onEnvironmentAdd = useCallback(function () {
        updateVM(function (draftVM) {
            var _a, _b, _c, _d, _e, _f;
            if (!((_b = (_a = draftVM.spec.template) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.volumes)) {
                ensurePath(draftVM, 'spec.template.spec');
                draftVM.spec.template.spec.volumes = [];
            }
            if (!((_f = (_e = (_d = (_c = draftVM.spec.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.devices) === null || _f === void 0 ? void 0 : _f.disks)) {
                ensurePath(draftVM, 'spec.template.spec.domain.devices');
                draftVM.spec.template.spec.domain.devices.disks = [];
            }
            var diskName = "environment-disk-".concat(getRandomChars());
            getDisks(draftVM).push({
                disk: {
                    bus: isWindowsVM ? InterfaceTypes.SATA : InterfaceTypes.VIRTIO,
                },
                name: diskName,
                serial: getRandomSerial().toUpperCase(),
            });
            getVolumes(draftVM).push({
                name: diskName,
            });
        });
    }, [updateVM, isWindowsVM]);
    var onEnvironmentChange = function (diskName, name, serial, kind) {
        if (environments.find(function (env) { return env.name === name; })) {
            return setError(new Error(t('Resource already selected')));
        }
        if (error) {
            setError(null);
        }
        updateVM(function (draftVM) {
            var _a;
            var volumes = getVolumes(draftVM);
            var envVolumeIndex = volumes === null || volumes === void 0 ? void 0 : volumes.findIndex(function (volume) { return volume.name === diskName; });
            var envDisk = (_a = getDisks(draftVM)) === null || _a === void 0 ? void 0 : _a.find(function (disk) { return disk.name === diskName; });
            if (!envDisk || envVolumeIndex < 0)
                setError(undefined);
            envDisk.serial = serial;
            var newEnvVolume = updateVolumeForKind(volumes[envVolumeIndex], name, kind);
            volumes.splice(envVolumeIndex, 1, newEnvVolume);
        });
    };
    var onEnvironmentRemove = useCallback(function (diskName) {
        updateVM(function (draftVM) {
            draftVM.spec.template.spec.volumes = (getVolumes(draftVM) || []).filter(function (volume) { return volume.name !== diskName; });
            draftVM.spec.template.spec.domain.devices.disks = (getDisks(draftVM) || []).filter(function (disk) { return disk.name !== diskName; });
        });
    }, [updateVM]);
    return {
        edited: edited,
        environments: environments,
        error: error,
        onEnvironmentAdd: onEnvironmentAdd,
        onEnvironmentChange: onEnvironmentChange,
        onEnvironmentRemove: onEnvironmentRemove,
        setError: setError,
    };
};
export default useEnvironments;
//# sourceMappingURL=useEnvironments.js.map