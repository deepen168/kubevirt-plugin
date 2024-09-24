var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useMemo } from 'react';
import { DEFAULT_PREFERENCE_LABEL } from '@catalog/CreateFromInstanceTypes/utils/constants';
import { DataSourceModelGroupVersionKind, modelToGroupVersionKind, PersistentVolumeClaimModel, VolumeSnapshotModel, } from '@kubevirt-ui/kubevirt-api/console';
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
import { convertResourceArrayToMap, getReadyOrCloningOrUploadingDataSources, } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Operator, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useBootableVolumes = function (namespace) {
    var projectsNamespace = namespace === ALL_PROJECTS ? null : namespace;
    var _a = useK8sWatchResource({
        groupVersionKind: DataSourceModelGroupVersionKind,
        isList: true,
        namespace: projectsNamespace,
        selector: {
            matchExpressions: [{ key: DEFAULT_PREFERENCE_LABEL, operator: Operator.Exists }],
        },
    }), dataSources = _a[0], loadedDataSources = _a[1], dataSourcesError = _a[2];
    var _b = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(DataImportCronModel),
        isList: true,
        namespace: projectsNamespace,
    }), dataImportCrons = _b[0], loadedDataImportCrons = _b[1], dataImportCronsError = _b[2];
    // getting all pvcs since there could be a case where a DS has the label and it's underlying PVC does not
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
        isList: true,
        namespace: projectsNamespace,
    }), pvcs = _c[0], loadedPVCs = _c[1], loadErrorPVCs = _c[2];
    // getting volumesnapshot as this can also be a source of DS
    var volumeSnapshots = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(VolumeSnapshotModel),
        isList: true,
        namespace: projectsNamespace,
    })[0];
    var error = useMemo(function () { return dataSourcesError || loadErrorPVCs || dataImportCronsError; }, [dataSourcesError, loadErrorPVCs, dataImportCronsError]);
    var loaded = useMemo(function () { return (error ? true : loadedDataSources && loadedPVCs && loadedDataImportCrons); }, [error, loadedDataSources, loadedPVCs, loadedDataImportCrons]);
    var readyOrCloningDataSources = useMemo(function () { return getReadyOrCloningOrUploadingDataSources(dataSources, dataImportCrons); }, [dataSources, dataImportCrons]);
    var pvcSources = useMemo(function () { return convertResourceArrayToMap(pvcs, true); }, [pvcs]);
    var bootableVolumes = useMemo(function () {
        var dataSourceVolumes = loaded && !isEmpty(readyOrCloningDataSources) ? __spreadArray([], readyOrCloningDataSources, true) : [];
        return dataSourceVolumes;
    }, [loaded, readyOrCloningDataSources]);
    var volumeSnapshotSources = useMemo(function () {
        return dataSources.reduce(function (acc, ds) {
            var _a, _b, _c;
            if ((_c = (_b = (_a = ds === null || ds === void 0 ? void 0 : ds.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.snapshot) === null || _c === void 0 ? void 0 : _c.name) {
                var matchedVolumeSnapshot = volumeSnapshots.find(function (volume) { var _a, _b, _c; return volume.metadata.name === ((_c = (_b = (_a = ds === null || ds === void 0 ? void 0 : ds.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.snapshot) === null || _c === void 0 ? void 0 : _c.name); });
                acc[ds.metadata.name] = matchedVolumeSnapshot;
            }
            return acc;
        }, {});
    }, [volumeSnapshots, dataSources]);
    return {
        bootableVolumes: bootableVolumes,
        dataImportCrons: dataImportCrons,
        error: error,
        loaded: loaded,
        pvcSources: pvcSources,
        volumeSnapshotSources: volumeSnapshotSources,
    };
};
export default useBootableVolumes;
//# sourceMappingURL=useBootableVolumes.js.map