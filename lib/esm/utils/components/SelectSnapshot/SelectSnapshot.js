import React, { useCallback, useMemo } from 'react';
import { modelToGroupVersionKind, NamespaceModel, VolumeSnapshotModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup } from '@patternfly/react-core';
import InlineFilterSelect from '../FilterSelect/InlineFilterSelect';
import Loading from '../Loading/Loading';
import useSnapshots from './useSnapshots';
import './select-snapshot.scss';
var SelectSnapshot = function (_a) {
    var selectSnapshotName = _a.selectSnapshotName, selectSnapshotNamespace = _a.selectSnapshotNamespace, snapshotNameSelected = _a.snapshotNameSelected, snapshotNamespaceSelected = _a.snapshotNamespaceSelected;
    var t = useKubevirtTranslation().t;
    var _b = useSnapshots(snapshotNamespaceSelected), projectsLoaded = _b.projectsLoaded, projectsNames = _b.projectsNames, snapshots = _b.snapshots, snapshotsLoaded = _b.snapshotsLoaded;
    var onSelectProject = useCallback(function (newProject) {
        selectSnapshotNamespace && selectSnapshotNamespace(newProject);
        selectSnapshotName(undefined);
    }, [selectSnapshotNamespace, selectSnapshotName]);
    var snapshotNames = useMemo(function () { var _a; return (_a = snapshots === null || snapshots === void 0 ? void 0 : snapshots.map(function (snapshot) { var _a; return (_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _a === void 0 ? void 0 : _a.name; })) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a === null || a === void 0 ? void 0 : a.localeCompare(b); }); }, [snapshots]);
    return (React.createElement("div", null,
        projectsLoaded ? (React.createElement(FormGroup, { className: "snapshot-selection-formgroup", fieldId: "snapshot-project-select", isRequired: true, label: t('VolumeSnapshot project') },
            React.createElement(InlineFilterSelect, { options: projectsNames.map(function (name) { return ({
                    children: name,
                    groupVersionKind: modelToGroupVersionKind(NamespaceModel),
                    value: name,
                }); }), toggleProps: {
                    isDisabled: !selectSnapshotNamespace,
                    isFullWidth: true,
                    placeholder: t('--- Select VolumeSnapshot project ---'),
                }, selected: snapshotNamespaceSelected, setSelected: onSelectProject }))) : (React.createElement(Loading, null)),
        snapshotsLoaded ? (React.createElement(FormGroup, { fieldId: "snapshot-name-select", isRequired: true, label: t('VolumeSnapshot name') },
            React.createElement(InlineFilterSelect, { options: snapshotNames.map(function (name) { return ({
                    children: name,
                    groupVersionKind: modelToGroupVersionKind(VolumeSnapshotModel),
                    value: name,
                }); }), toggleProps: {
                    isDisabled: !snapshotNamespaceSelected,
                    isFullWidth: true,
                    placeholder: t('--- Select VolumeSnapshot name ---'),
                }, selected: snapshotNameSelected, setSelected: selectSnapshotName }))) : (React.createElement(Loading, null))));
};
export default SelectSnapshot;
//# sourceMappingURL=SelectSnapshot.js.map