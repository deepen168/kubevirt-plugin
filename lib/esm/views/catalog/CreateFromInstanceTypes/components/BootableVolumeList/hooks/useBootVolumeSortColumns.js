import { useState } from 'react';
import { DEFAULT_PREFERENCE_LABEL } from '@catalog/CreateFromInstanceTypes/utils/constants';
import { getBootableVolumePVCSource } from '@kubevirt-utils/resources/bootableresources/helpers';
import { getVolumeSnapshotSize, getVolumeSnapshotStorageClass, } from '@kubevirt-utils/resources/bootableresources/selectors';
import { getName } from '@kubevirt-utils/resources/shared';
import { DESCRIPTION_ANNOTATION } from '@kubevirt-utils/resources/vm';
var useBootVolumeSortColumns = function (unsortedData, volumeFavorites, preferences, pvcSources, volumeSnapshotSources, pagination) {
    if (unsortedData === void 0) { unsortedData = []; }
    var _a = useState(0), activeSortIndex = _a[0], setActiveSortIndex = _a[1];
    var _b = useState('asc'), activeSortDirection = _b[0], setActiveSortDirection = _b[1];
    var getSortableRowValues = function (bootableVolume) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var pvcSource = getBootableVolumePVCSource(bootableVolume, pvcSources);
        var volumeSnapshotSource = volumeSnapshotSources === null || volumeSnapshotSources === void 0 ? void 0 : volumeSnapshotSources[(_a = bootableVolume === null || bootableVolume === void 0 ? void 0 : bootableVolume.metadata) === null || _a === void 0 ? void 0 : _a.name];
        return [
            getName(bootableVolume),
            getName(preferences[(_c = (_b = bootableVolume === null || bootableVolume === void 0 ? void 0 : bootableVolume.metadata) === null || _b === void 0 ? void 0 : _b.labels) === null || _c === void 0 ? void 0 : _c[DEFAULT_PREFERENCE_LABEL]]),
            ((_d = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _d === void 0 ? void 0 : _d.storageClassName) || getVolumeSnapshotStorageClass(volumeSnapshotSource),
            ((_g = (_f = (_e = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _e === void 0 ? void 0 : _e.resources) === null || _f === void 0 ? void 0 : _f.requests) === null || _g === void 0 ? void 0 : _g.storage) || getVolumeSnapshotSize(volumeSnapshotSource),
            (_j = (_h = bootableVolume === null || bootableVolume === void 0 ? void 0 : bootableVolume.metadata) === null || _h === void 0 ? void 0 : _h.annotations) === null || _j === void 0 ? void 0 : _j[DESCRIPTION_ANNOTATION],
        ];
    };
    var sortVolumes = function (a, b) {
        //favorites is column 0, so we need to decrease index by 1
        var aValue = getSortableRowValues(a)[activeSortIndex - 1];
        var bValue = getSortableRowValues(b)[activeSortIndex - 1];
        if (activeSortDirection === 'asc') {
            return aValue === null || aValue === void 0 ? void 0 : aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });
        }
        return bValue === null || bValue === void 0 ? void 0 : bValue.localeCompare(aValue, undefined, { numeric: true, sensitivity: 'base' });
    };
    var getSortType = function (columnIndex) { return ({
        columnIndex: columnIndex,
        onSort: function (_event, index, direction) {
            setActiveSortIndex(index);
            setActiveSortDirection(direction);
        },
        sortBy: {
            defaultDirection: 'asc',
            direction: activeSortDirection,
            index: activeSortIndex,
        },
    }); };
    // will try to keep the same sorting for other fields such as name and only arrange the favorites to be first
    var arrangeFavorites = function (acc, volume) {
        var _a;
        if (activeSortIndex === 0) {
            var isASC = activeSortDirection === 'asc';
            if (volumeFavorites === null || volumeFavorites === void 0 ? void 0 : volumeFavorites.includes((_a = volume === null || volume === void 0 ? void 0 : volume.metadata) === null || _a === void 0 ? void 0 : _a.name)) {
                acc[isASC ? 0 : 1].push(volume);
            }
            else {
                acc[isASC ? 1 : 0].push(volume);
            }
            return acc;
        }
        acc[0].push(volume);
        return acc;
    };
    var sortedData = unsortedData.sort(sortVolumes).reduce(arrangeFavorites, [[], []]).flat();
    var sortedPaginatedData = sortedData.slice(pagination.startIndex, pagination.endIndex);
    return { getSortType: getSortType, sortedData: sortedData, sortedPaginatedData: sortedPaginatedData };
};
export default useBootVolumeSortColumns;
//# sourceMappingURL=useBootVolumeSortColumns.js.map