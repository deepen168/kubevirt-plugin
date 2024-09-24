import * as React from 'react';
import { bytesFromQuantity } from '@catalog/utils/quantity';
import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getBootDisk, getDataVolumeTemplates, getDisks, getVolumes, } from '@kubevirt-utils/resources/vm';
import { getPrintableDiskDrive, getPrintableDiskInterface, } from '@kubevirt-utils/resources/vm/utils/disk/selectors';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
/**
 * A Hook for getting disks data for a VM
 * @param vm - virtual machine to get disks from
 * @returns disks data and loading state
 */
var useTemplateDisksTableData = function (template) {
    var _a;
    var t = useKubevirtTranslation().t;
    var vm = getTemplateVirtualMachineObject(template);
    var vmDisks = getDisks(vm);
    var vmVolumes = getVolumes(vm);
    var vmDataVolumeTemplates = getDataVolumeTemplates(vm);
    var _b = useK8sWatchResource({
        isList: true,
        kind: PersistentVolumeClaimModel.kind,
        namespace: (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
        namespaced: true,
    }), pvcs = _b[0], loaded = _b[1], loadingError = _b[2];
    var disks = React.useMemo(function () {
        var diskDevices = vmVolumes === null || vmVolumes === void 0 ? void 0 : vmVolumes.map(function (volume) {
            var disk = vmDisks === null || vmDisks === void 0 ? void 0 : vmDisks.find(function (_a) {
                var name = _a.name;
                return name === (volume === null || volume === void 0 ? void 0 : volume.name);
            });
            var pvc = pvcs === null || pvcs === void 0 ? void 0 : pvcs.find(function (_a) {
                var _b, _c;
                var metadata = _a.metadata;
                return (metadata === null || metadata === void 0 ? void 0 : metadata.name) === ((_b = volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) === null || _b === void 0 ? void 0 : _b.claimName) ||
                    (metadata === null || metadata === void 0 ? void 0 : metadata.name) === ((_c = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _c === void 0 ? void 0 : _c.name);
            });
            var dataVolumeTemplate = vmDataVolumeTemplates === null || vmDataVolumeTemplates === void 0 ? void 0 : vmDataVolumeTemplates.find(function (_a) {
                var _b;
                var metadata = _a.metadata;
                return (metadata === null || metadata === void 0 ? void 0 : metadata.name) === ((_b = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _b === void 0 ? void 0 : _b.name);
            });
            return { dataVolumeTemplate: dataVolumeTemplate, disk: disk, pvc: pvc, volume: volume };
        });
        return (diskDevices || []).map(function (device) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
            var source = function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                if ((_b = (_a = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.sourceRef) {
                    return t('PVC (auto import)');
                }
                if ((_f = (_e = (_d = (_c = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e.http) === null || _f === void 0 ? void 0 : _f.url) {
                    return t('URL');
                }
                if ((_g = device === null || device === void 0 ? void 0 : device.volume) === null || _g === void 0 ? void 0 : _g.containerDisk) {
                    return t('Container (Ephemeral)');
                }
                var sourceName = ((_j = (_h = device === null || device === void 0 ? void 0 : device.pvc) === null || _h === void 0 ? void 0 : _h.metadata) === null || _j === void 0 ? void 0 : _j.name) || t('Other');
                return sourceName;
            };
            var size = ((_e = (_d = (_c = (_b = (_a = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.storage) === null || _c === void 0 ? void 0 : _c.resources) === null || _d === void 0 ? void 0 : _d.requests) === null || _e === void 0 ? void 0 : _e.storage) ||
                ((_k = (_j = (_h = (_g = (_f = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _f === void 0 ? void 0 : _f.spec) === null || _g === void 0 ? void 0 : _g.pvc) === null || _h === void 0 ? void 0 : _h.resources) === null || _j === void 0 ? void 0 : _j.requests) === null || _k === void 0 ? void 0 : _k.storage);
            var storageClass = ((_o = (_m = (_l = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _l === void 0 ? void 0 : _l.spec) === null || _m === void 0 ? void 0 : _m.storage) === null || _o === void 0 ? void 0 : _o.storageClassName) ||
                ((_r = (_q = (_p = device === null || device === void 0 ? void 0 : device.dataVolumeTemplate) === null || _p === void 0 ? void 0 : _p.spec) === null || _q === void 0 ? void 0 : _q.pvc) === null || _r === void 0 ? void 0 : _r.storageClassName) ||
                '-';
            return {
                drive: getPrintableDiskDrive(device === null || device === void 0 ? void 0 : device.disk),
                interface: getPrintableDiskInterface(device === null || device === void 0 ? void 0 : device.disk),
                isBootDisk: ((_s = device === null || device === void 0 ? void 0 : device.disk) === null || _s === void 0 ? void 0 : _s.name) === ((_t = getBootDisk(vm)) === null || _t === void 0 ? void 0 : _t.name),
                isEnvDisk: !!((_u = device === null || device === void 0 ? void 0 : device.volume) === null || _u === void 0 ? void 0 : _u.configMap) ||
                    !!((_v = device === null || device === void 0 ? void 0 : device.volume) === null || _v === void 0 ? void 0 : _v.secret) ||
                    !!((_w = device === null || device === void 0 ? void 0 : device.volume) === null || _w === void 0 ? void 0 : _w.serviceAccount),
                metadata: { name: (_x = device === null || device === void 0 ? void 0 : device.disk) === null || _x === void 0 ? void 0 : _x.name },
                name: (_y = device === null || device === void 0 ? void 0 : device.disk) === null || _y === void 0 ? void 0 : _y.name,
                namespace: (_0 = (_z = device === null || device === void 0 ? void 0 : device.pvc) === null || _z === void 0 ? void 0 : _z.metadata) === null || _0 === void 0 ? void 0 : _0.namespace,
                size: size ? bytesFromQuantity(size, 2).join('') : '-',
                source: source(),
                storageClass: storageClass,
            };
        });
    }, [pvcs, t, vm, vmDataVolumeTemplates, vmDisks, vmVolumes]);
    return [disks || [], loaded, loadingError];
};
export default useTemplateDisksTableData;
//# sourceMappingURL=useTemplateDisksTableData.js.map