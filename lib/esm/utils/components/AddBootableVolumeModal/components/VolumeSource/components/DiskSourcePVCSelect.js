import React, { useCallback, useMemo } from 'react';
import { bytesToDiskSize } from '@catalog/utils/quantity';
import useProjects from '@kubevirt-utils/hooks/useProjects';
import usePVCs from '@kubevirt-utils/hooks/usePVCs';
import DiskSourcePVCSelectName from './DiskSourcePVCSelectName';
import DiskSourcePVCSelectNamespace from './DiskSourcePVCSelectNamespace';
var DiskSourcePVCSelect = function (_a) {
    var pvcNameSelected = _a.pvcNameSelected, pvcNamespaceSelected = _a.pvcNamespaceSelected, selectPVCName = _a.selectPVCName, selectPVCNamespace = _a.selectPVCNamespace, setDiskSize = _a.setDiskSize;
    var _b = useProjects(), projectsNames = _b[0], projectNamesLoaded = _b[1];
    var _c = usePVCs(pvcNamespaceSelected), pvcs = _c[0], pvcsLoaded = _c[1];
    var onSelectProject = useCallback(function (newProject) {
        selectPVCNamespace && selectPVCNamespace(newProject);
        selectPVCName(undefined);
    }, [selectPVCNamespace, selectPVCName]);
    var onPVCSelected = useCallback(function (selection) {
        var _a, _b, _c;
        selectPVCName(selection);
        var selectedPVC = pvcs === null || pvcs === void 0 ? void 0 : pvcs.find(function (pvc) { var _a; return ((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name) === selection; });
        var selectedPVCSize = (_c = (_b = (_a = selectedPVC === null || selectedPVC === void 0 ? void 0 : selectedPVC.spec) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.requests) === null || _c === void 0 ? void 0 : _c.storage;
        setDiskSize && setDiskSize(bytesToDiskSize(selectedPVCSize));
    }, [selectPVCName, pvcs, setDiskSize]);
    var pvcNames = useMemo(function () { var _a; return (_a = pvcs === null || pvcs === void 0 ? void 0 : pvcs.map(function (pvc) { var _a; return (_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name; })) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a === null || a === void 0 ? void 0 : a.localeCompare(b); }); }, [pvcs]);
    return (React.createElement("div", null,
        React.createElement(DiskSourcePVCSelectNamespace, { isDisabled: !selectPVCNamespace, onChange: onSelectProject, projectNames: projectsNames, projectsLoaded: projectNamesLoaded, selectedProject: pvcNamespaceSelected }),
        React.createElement(DiskSourcePVCSelectName, { isDisabled: !pvcNamespaceSelected, onChange: onPVCSelected, pvcNames: pvcNames, pvcNameSelected: pvcNameSelected, pvcsLoaded: pvcsLoaded })));
};
export default DiskSourcePVCSelect;
//# sourceMappingURL=DiskSourcePVCSelect.js.map