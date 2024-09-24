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
import React, { useEffect, useMemo, useState } from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import ProjectDropdown from '@kubevirt-utils/components/ProjectDropdown/ProjectDropdown';
import { OPENSHIFT_OS_IMAGES_NS } from '@kubevirt-utils/constants/constants';
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useHideDeprecatedBootableVolumes from '@kubevirt-utils/resources/bootableresources/hooks/useHideDeprecatedBootableVolumes';
import { convertResourceArrayToMap, getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useListPageFilter } from '@openshift-console/dynamic-plugin-sdk';
import { FormGroup, Split, SplitItem } from '@patternfly/react-core';
import BootableVolumeEmptyState from '../BootableVolumeEmptyState/BootableVolumeEmptyState';
import BootableVolumeListPagination from './components/BootableVolumeListPagination/BootableVolumeListPagination';
import BootableVolumesPipelinesHint from './components/BootableVolumesPipelinesHint/BootableVolumesPipelinesHint';
import BootableVolumeTable from './components/BootableVolumeTable/BootableVolumeTable';
import ShowAllBootableVolumesButton from './components/ShowAllBootableVolumesButton/ShowAllBootableVolumesButton';
import useBootVolumeColumns from './hooks/useBootVolumeColumns';
import useBootVolumeFilters from './hooks/useBootVolumeFilters';
import useBootVolumeSortColumns from './hooks/useBootVolumeSortColumns';
import { paginationInitialStateForm, paginationInitialStateModal } from './utils/constants';
import { getPaginationFromVolumeIndex } from './utils/utils';
import './BootableVolumeList.scss';
var BootableVolumeList = function (_a) {
    var bootableVolumesData = _a.bootableVolumesData, currentTab = _a.currentTab, _b = _a.displayShowAllButton, displayShowAllButton = _b === void 0 ? false : _b, favorites = _a.favorites, preferencesData = _a.preferencesData, selectedBootableVolumeState = _a.selectedBootableVolumeState;
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var _c = useInstanceTypeVMStore(), instanceTypeVMState = _c.instanceTypeVMState, onSelectCreatedVolume = _c.onSelectCreatedVolume, setVolumeListNamespace = _c.setVolumeListNamespace, volumeListNamespace = _c.volumeListNamespace;
    var pvcSource = instanceTypeVMState.pvcSource, selectedBootableVolume = instanceTypeVMState.selectedBootableVolume, volumeSnapshotSource = instanceTypeVMState.volumeSnapshotSource;
    var bootableVolumes = bootableVolumesData.bootableVolumes, loaded = bootableVolumesData.loaded, pvcSources = bootableVolumesData.pvcSources, volumeSnapshotSources = bootableVolumesData.volumeSnapshotSources;
    var preferencesMap = useMemo(function () { return convertResourceArrayToMap(preferencesData); }, [preferencesData]);
    var _d = useBootVolumeColumns(volumeListNamespace, !displayShowAllButton), activeColumns = _d.activeColumns, columnLayout = _d.columnLayout, loadedColumns = _d.loadedColumns;
    var filters = useBootVolumeFilters(!displayShowAllButton);
    var _e = useListPageFilter(bootableVolumes, filters), unfilteredData = _e[0], data = _e[1], onFilterChange = _e[2];
    var _f = useState(displayShowAllButton ? paginationInitialStateForm : paginationInitialStateModal), pagination = _f[0], setPagination = _f[1];
    useHideDeprecatedBootableVolumes(onFilterChange, currentTab);
    var volumeFavorites = favorites[0];
    var _g = useBootVolumeSortColumns(data, volumeFavorites, preferencesMap, pvcSources, volumeSnapshotSources, pagination), getSortType = _g.getSortType, sortedData = _g.sortedData, sortedPaginatedData = _g.sortedPaginatedData;
    useEffect(function () {
        if (!isAdmin && volumeListNamespace === ALL_PROJECTS) {
            setVolumeListNamespace(OPENSHIFT_OS_IMAGES_NS);
        }
    }, [isAdmin, volumeListNamespace, setVolumeListNamespace]);
    var displayVolumes = !isEmpty(bootableVolumes) && loaded && loadedColumns;
    var onModalBootableVolumeSelect = function (modalSelectedVolume) {
        var selectedVolumeIndex = sortedData === null || sortedData === void 0 ? void 0 : sortedData.findIndex(function (volume) { return getName(volume) === getName(modalSelectedVolume); });
        setPagination(getPaginationFromVolumeIndex(selectedVolumeIndex));
        onSelectCreatedVolume(modalSelectedVolume, pvcSource, volumeSnapshotSource);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Split, { className: "bootable-volume-list-bar", hasGutter: true },
            React.createElement(SplitItem, null,
                React.createElement(FormGroup, { className: "bootable-volume-list-bar__volume-namespace", label: t('Volumes project') },
                    React.createElement(ProjectDropdown, { includeAllProjects: isAdmin, onChange: setVolumeListNamespace, selectedProject: volumeListNamespace }))),
            displayVolumes && (React.createElement(React.Fragment, null,
                React.createElement(SplitItem, { className: "bootable-volume-list-bar__filter" },
                    React.createElement(ListPageFilter, { onFilterChange: function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            onFilterChange.apply(void 0, args);
                            setPagination(function (prevPagination) { return (__assign(__assign({}, prevPagination), { endIndex: prevPagination === null || prevPagination === void 0 ? void 0 : prevPagination.perPage, page: 1, startIndex: 0 })); });
                        }, columnLayout: columnLayout, data: unfilteredData, hideLabelFilter: true, hideNameLabelFilters: !displayShowAllButton, loaded: Boolean(loaded) && loadedColumns, 
                        // nameFilter={!displayShowAllButton && "modal-name"} can remove comment once this merged https://github.com/openshift/console/pull/12438 and build into new SDK version
                        rowFilters: filters })),
                React.createElement(SplitItem, { isFilled: true }),
                React.createElement(SplitItem, { className: "bootable-volume-list-bar__pagination" },
                    React.createElement(BootableVolumeListPagination, { data: data, displayShowAllButton: displayShowAllButton, pagination: pagination, setPagination: setPagination })),
                displayShowAllButton && (React.createElement(ShowAllBootableVolumesButton, { bootableVolumesData: bootableVolumesData, favorites: favorites, onSelect: onModalBootableVolumeSelect, preferencesData: preferencesData }))))),
        displayVolumes ? (React.createElement(React.Fragment, null,
            React.createElement(BootableVolumeTable, { selectedBootableVolumeState: !displayShowAllButton
                    ? selectedBootableVolumeState
                    : [selectedBootableVolume, onSelectCreatedVolume], activeColumns: activeColumns, bootableVolumesData: bootableVolumesData, favorites: favorites, getSortType: getSortType, preferencesMap: preferencesMap, sortedPaginatedData: sortedPaginatedData }),
            React.createElement(BootableVolumesPipelinesHint, { bootableVolumes: bootableVolumes }))) : (React.createElement(BootableVolumeEmptyState, null))));
};
export default BootableVolumeList;
//# sourceMappingURL=BootableVolumeList.js.map