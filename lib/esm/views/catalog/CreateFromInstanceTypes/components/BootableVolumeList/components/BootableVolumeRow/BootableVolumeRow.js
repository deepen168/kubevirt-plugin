import React from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { getTemplateOSIcon, getVolumeNameOSIcon } from '@catalog/templatescatalog/utils/os-icons';
import DeprecatedBadge from '@kubevirt-utils/components/badges/DeprecatedBadge/DeprecatedBadge';
import { logITFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { BOOTABLE_VOLUME_SELECTED } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isDeprecated } from '@kubevirt-utils/resources/bootableresources/helpers';
import { getVolumeSnapshotSize, getVolumeSnapshotStorageClass, } from '@kubevirt-utils/resources/bootableresources/selectors';
import { getName, getNamespace, isDataImportCronProgressing, } from '@kubevirt-utils/resources/shared';
import { ANNOTATIONS } from '@kubevirt-utils/resources/template';
import { isDataSourceCloning, isDataSourceUploading, } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { formatBytes } from '@kubevirt-utils/resources/vm/utils/disk/size';
import { Label, Text, TextVariants } from '@patternfly/react-core';
import { TableText, Tr, WrapModifier } from '@patternfly/react-table';
import TableData from './TableData';
import './BootableVolumeRow.scss';
var BootableVolumeRow = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var activeColumnIDs = _a.activeColumnIDs, bootableVolume = _a.bootableVolume, _k = _a.rowData, _l = _k.bootableVolumeSelectedState, selectedBootableVolume = _l[0], setSelectedBootableVolume = _l[1], dataImportCron = _k.dataImportCron, favorites = _k.favorites, preference = _k.preference, pvcSource = _k.pvcSource, volumeSnapshotSource = _k.volumeSnapshotSource;
    var t = useKubevirtTranslation().t;
    var bootVolumeName = getName(bootableVolume);
    var bootVolumeNamespace = getNamespace(bootableVolume);
    var sizeData = formatBytes(((_d = (_c = (_b = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _b === void 0 ? void 0 : _b.resources) === null || _c === void 0 ? void 0 : _c.requests) === null || _d === void 0 ? void 0 : _d.storage) || getVolumeSnapshotSize(volumeSnapshotSource));
    var icon = getVolumeNameOSIcon(bootVolumeName) || getTemplateOSIcon(preference);
    var isFavorite = favorites[0], addOrRemoveFavorite = favorites[1];
    var handleOnClick = function () {
        setSelectedBootableVolume(bootableVolume, pvcSource, volumeSnapshotSource);
        logITFlowEvent(BOOTABLE_VOLUME_SELECTED, null, {
            selectedBootableVolume: getName(bootableVolume),
        });
    };
    var volumeListNamespace = useInstanceTypeVMStore().volumeListNamespace;
    var isCloning = isDataImportCronProgressing(dataImportCron) ||
        isDataSourceCloning(bootableVolume);
    return (React.createElement(Tr, { isRowSelected: getName(selectedBootableVolume) === bootVolumeName &&
            getNamespace(selectedBootableVolume) === bootVolumeNamespace, className: "bootable-volume-row", isClickable: true, isSelectable: true, onClick: function () { return handleOnClick(); } },
        React.createElement(TableData, { favorites: {
                isFavorited: isFavorite,
                onFavorite: function (e, isFavoring) {
                    e.stopPropagation();
                    addOrRemoveFavorite(isFavoring);
                },
            }, activeColumnIDs: activeColumnIDs, id: "favorites" }),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name", width: 20 },
            React.createElement("img", { alt: "os-icon", className: "vm-catalog-row-icon", src: icon }),
            React.createElement(Text, { className: "bootable-volume-row__name--text", component: TextVariants.small }, bootVolumeName),
            isDeprecated(bootVolumeName) && React.createElement(DeprecatedBadge, null),
            isCloning && React.createElement(Label, { className: "vm-catalog-row-label" }, t('Clone in progress')),
            isDataSourceUploading(bootableVolume) && (React.createElement(Label, { className: "vm-catalog-row-label" }, t('Upload in progress')))),
        volumeListNamespace === ALL_PROJECTS && (React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "namespace", width: 20 }, bootVolumeNamespace)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "operating-system", width: 20 }, ((_f = (_e = preference === null || preference === void 0 ? void 0 : preference.metadata) === null || _e === void 0 ? void 0 : _e.annotations) === null || _f === void 0 ? void 0 : _f[ANNOTATIONS.displayName]) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "storage-class", width: 15 }, getVolumeSnapshotStorageClass(volumeSnapshotSource) ||
            ((_g = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _g === void 0 ? void 0 : _g.storageClassName) ||
            NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "size" }, sizeData),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: ANNOTATIONS.description, width: 30 },
            React.createElement(TableText, { wrapModifier: WrapModifier.truncate }, ((_j = (_h = bootableVolume === null || bootableVolume === void 0 ? void 0 : bootableVolume.metadata) === null || _h === void 0 ? void 0 : _h.annotations) === null || _j === void 0 ? void 0 : _j[ANNOTATIONS.description]) || NO_DATA_DASH))));
};
export default BootableVolumeRow;
//# sourceMappingURL=BootableVolumeRow.js.map