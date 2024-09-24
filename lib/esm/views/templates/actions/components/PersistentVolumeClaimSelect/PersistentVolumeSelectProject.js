import React from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, ValidatedOptions } from '@patternfly/react-core';
export var PersistentVolumeSelectProject = function (_a) {
    var onChange = _a.onChange, projectsName = _a.projectsName, selectedProject = _a.selectedProject;
    var t = useKubevirtTranslation().t;
    var fieldId = 'pvc-project-select';
    var validated = !selectedProject ? ValidatedOptions.error : ValidatedOptions.default;
    return (React.createElement(FormGroup, { className: "pvc-selection-formgroup", fieldId: fieldId, id: fieldId, isRequired: true, label: t('PVC project') },
        React.createElement(InlineFilterSelect, { options: projectsName === null || projectsName === void 0 ? void 0 : projectsName.map(function (name) { return ({
                children: name,
                groupVersionKind: modelToGroupVersionKind(ProjectModel),
                value: name,
            }); }), toggleProps: {
                isFullHeight: true,
                placeholder: t('--- Select PVC project ---'),
            }, selected: selectedProject, setSelected: onChange }),
        React.createElement(FormGroupHelperText, { validated: validated }, validated === ValidatedOptions.default && t('Location of the existing PVC'))));
};
//# sourceMappingURL=PersistentVolumeSelectProject.js.map