import React, { useCallback } from 'react';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, ProjectModel, } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup } from '@patternfly/react-core';
import { useProjectsAndPVCs } from '../useProjectsAndPVCs';
import { getPVCSource } from '../utils';
import './PersistentVolumeClaimSelect.scss';
export var PersistentVolumeClaimSelect = function (_a) {
    var currentSize = _a.currentSize, testId = _a["data-test-id"], onSourceChange = _a.onSourceChange, projectSelected = _a.projectSelected, pvcNameSelected = _a.pvcNameSelected;
    var t = useKubevirtTranslation().t;
    var _b = useProjectsAndPVCs(projectSelected), filteredPVCNames = _b.filteredPVCNames, projectsLoaded = _b.projectsLoaded, projectsNames = _b.projectsNames, pvcMapper = _b.pvcMapper, pvcsLoaded = _b.pvcsLoaded;
    var onSelectProject = useCallback(function (newProject) {
        onSourceChange(getPVCSource(undefined, newProject, currentSize));
    }, [currentSize, onSourceChange]);
    var onPVCSelected = useCallback(function (selection) {
        var _a, _b, _c, _d, _e;
        var size = (_e = (_d = (_c = (_b = (_a = pvcMapper === null || pvcMapper === void 0 ? void 0 : pvcMapper[projectSelected]) === null || _a === void 0 ? void 0 : _a[selection]) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.resources) === null || _d === void 0 ? void 0 : _d.requests) === null || _e === void 0 ? void 0 : _e.storage;
        onSourceChange(getPVCSource(selection, projectSelected, size));
    }, [onSourceChange, projectSelected, pvcMapper]);
    return (React.createElement("div", null,
        projectsLoaded ? (React.createElement(FormGroup, { className: "pvc-selection-formgroup", fieldId: "".concat(testId, "-project-select"), isRequired: true, label: t('PVC project') },
            React.createElement(InlineFilterSelect, { options: projectsNames.map(function (name) { return ({
                    children: name,
                    groupVersionKind: modelToGroupVersionKind(ProjectModel),
                    value: name,
                }); }), toggleProps: {
                    placeholder: t('--- Select PVC project ---'),
                }, selected: projectSelected, setSelected: onSelectProject }))) : (React.createElement(Loading, null)),
        pvcsLoaded ? (React.createElement(FormGroup, { className: "pvc-selection-formgroup", fieldId: "".concat(testId, "-pvc-name-select"), isRequired: true, label: t('PVC name') },
            React.createElement(InlineFilterSelect, { options: filteredPVCNames.map(function (name) { return ({
                    children: name,
                    groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
                    value: name,
                }); }), toggleProps: {
                    placeholder: t('--- Select PVC name ---'),
                }, selected: pvcNameSelected, setSelected: onPVCSelected }))) : (React.createElement(Loading, null))));
};
//# sourceMappingURL=PersistentVolumeClaimSelect.js.map