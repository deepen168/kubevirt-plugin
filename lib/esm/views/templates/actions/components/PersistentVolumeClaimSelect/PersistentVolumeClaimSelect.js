import React, { useCallback } from 'react';
import useProjects from '@kubevirt-utils/hooks/useProjects';
import usePVCs from '@kubevirt-utils/hooks/usePVCs';
import { getName } from '@kubevirt-utils/resources/shared';
import { PersistentVolumeClainSelectSkeleton } from './PersistentVolumeClainSelectSkeleton';
import { PersistentVolumeSelectName } from './PersistentVolumeSelectName';
import { PersistentVolumeSelectProject } from './PersistentVolumeSelectProject';
import './PersistentVolumeClaimSelect.scss';
export var PersistentVolumeClaimSelect = function (_a) {
    var projectSelected = _a.projectSelected, pvcNameSelected = _a.pvcNameSelected, selectPVC = _a.selectPVC;
    var _b = useProjects(), projectsNames = _b[0], projectsLoaded = _b[1];
    var _c = usePVCs(projectSelected), pvcs = _c[0], pvcsLoaded = _c[1];
    var filteredPVCNames = pvcs === null || pvcs === void 0 ? void 0 : pvcs.map(getName);
    var onSelectProject = useCallback(function (newProject) {
        selectPVC(newProject);
    }, [selectPVC]);
    var onPVCSelected = useCallback(function (selection) {
        selectPVC(projectSelected, selection);
    }, [selectPVC, projectSelected]);
    if (!projectsLoaded)
        return React.createElement(PersistentVolumeClainSelectSkeleton, null);
    return (React.createElement("div", null,
        React.createElement(PersistentVolumeSelectProject, { onChange: onSelectProject, projectsName: projectsNames, selectedProject: projectSelected }),
        React.createElement(PersistentVolumeSelectName, { isDisabled: !projectSelected, isLoading: !pvcsLoaded, onChange: onPVCSelected, pvcNames: filteredPVCNames, pvcNameSelected: pvcNameSelected })));
};
//# sourceMappingURL=PersistentVolumeClaimSelect.js.map