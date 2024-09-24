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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import { DEFAULT_PREFERENCE_LABEL } from '@catalog/CreateFromInstanceTypes/utils/constants';
import { getBootableVolumePVCSource, getDataImportCronFromDataSource, } from '@kubevirt-utils/resources/bootableresources/helpers';
import { getLabel, getName } from '@kubevirt-utils/resources/shared';
import { Table, TableVariant, Tbody, Th, Thead, Tr } from '@patternfly/react-table';
import BootableVolumeRow from '../BootableVolumeRow/BootableVolumeRow';
var BootableVolumeTable = function (_a) {
    var activeColumns = _a.activeColumns, bootableVolumesData = _a.bootableVolumesData, favorites = _a.favorites, getSortType = _a.getSortType, preferencesMap = _a.preferencesMap, selectedBootableVolumeState = _a.selectedBootableVolumeState, sortedPaginatedData = _a.sortedPaginatedData;
    var volumeFavorites = favorites[0], updateFavorites = favorites[1];
    var dataImportCrons = bootableVolumesData.dataImportCrons, pvcSources = bootableVolumesData.pvcSources, volumeSnapshotSources = bootableVolumesData.volumeSnapshotSources;
    return (React.createElement(Table, { className: "BootableVolumeList-table", variant: TableVariant.compact },
        React.createElement(Thead, null,
            React.createElement(Tr, null, activeColumns.map(function (col, columnIndex) { return (React.createElement(Th, { sort: columnIndex === 0
                    ? __assign(__assign({}, getSortType(columnIndex)), { isFavorites: true }) : getSortType(columnIndex), id: col === null || col === void 0 ? void 0 : col.id, key: col === null || col === void 0 ? void 0 : col.id }, col === null || col === void 0 ? void 0 : col.title)); }))),
        React.createElement(Tbody, null, sortedPaginatedData.map(function (bs) {
            var _a, _b;
            return (React.createElement(BootableVolumeRow, { rowData: {
                    bootableVolumeSelectedState: selectedBootableVolumeState,
                    dataImportCron: getDataImportCronFromDataSource(dataImportCrons, bs),
                    favorites: [
                        volumeFavorites === null || volumeFavorites === void 0 ? void 0 : volumeFavorites.includes((_a = bs === null || bs === void 0 ? void 0 : bs.metadata) === null || _a === void 0 ? void 0 : _a.name),
                        function (addTofavorites) {
                            var _a;
                            return updateFavorites(addTofavorites
                                ? __spreadArray(__spreadArray([], volumeFavorites, true), [(_a = bs === null || bs === void 0 ? void 0 : bs.metadata) === null || _a === void 0 ? void 0 : _a.name], false) : volumeFavorites.filter(function (fav) { var _a; return fav !== ((_a = bs === null || bs === void 0 ? void 0 : bs.metadata) === null || _a === void 0 ? void 0 : _a.name); }));
                        },
                    ],
                    preference: preferencesMap[getLabel(bs, DEFAULT_PREFERENCE_LABEL)],
                    pvcSource: getBootableVolumePVCSource(bs, pvcSources),
                    volumeSnapshotSource: volumeSnapshotSources === null || volumeSnapshotSources === void 0 ? void 0 : volumeSnapshotSources[(_b = bs === null || bs === void 0 ? void 0 : bs.metadata) === null || _b === void 0 ? void 0 : _b.name],
                }, activeColumnIDs: activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; }), bootableVolume: bs, key: getName(bs) }));
        }))));
};
export default BootableVolumeTable;
//# sourceMappingURL=BootableVolumeTable.js.map