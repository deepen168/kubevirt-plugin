import React from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup } from '@patternfly/react-core';
var DiskSourcePVCSelectNamespace = function (_a) {
    var isDisabled = _a.isDisabled, onChange = _a.onChange, projectNames = _a.projectNames, projectsLoaded = _a.projectsLoaded, selectedProject = _a.selectedProject;
    var t = useKubevirtTranslation().t;
    var fieldId = 'pvc-project-select';
    return (React.createElement(FormGroup, { className: "pvc-selection-formgroup", fieldId: fieldId, id: fieldId, isRequired: true, label: t('Volume project') }, projectsLoaded ? (React.createElement(React.Fragment, null,
        React.createElement(InlineFilterSelect, { options: projectNames === null || projectNames === void 0 ? void 0 : projectNames.map(function (name) { return ({
                children: name,
                groupVersionKind: modelToGroupVersionKind(ProjectModel),
                value: name,
            }); }), toggleProps: {
                isDisabled: isDisabled,
                isFullWidth: true,
                placeholder: t('--- Select Volume project ---'),
            }, selected: selectedProject, setSelected: onChange }),
        React.createElement(FormGroupHelperText, null, t('Location of the existing Volume')))) : (React.createElement(Loading, null))));
};
export default DiskSourcePVCSelectNamespace;
//# sourceMappingURL=DiskSourcePVCSelectNamespace.js.map