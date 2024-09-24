import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useProjects from '@kubevirt-utils/hooks/useProjects';
import { FormGroup, ValidatedOptions } from '@patternfly/react-core';
import { DATAVOLUME_PVC_NAME, DATAVOLUME_PVC_NAMESPACE } from '../../../utils/constants';
import { diskSourcePVCNamespaceFieldID } from '../../utils/constants';
var DiskSourcePVCSelectNamespace = function () {
    var _a, _b, _c, _d;
    var t = useKubevirtTranslation().t;
    var _e = useFormContext(), control = _e.control, errors = _e.formState.errors, setValue = _e.setValue;
    var _f = useProjects(), projectNames = _f[0], projectsLoaded = _f[1];
    if (!projectsLoaded)
        return React.createElement(Loading, null);
    var error = (_d = (_c = (_b = (_a = errors === null || errors === void 0 ? void 0 : errors.dataVolumeTemplate) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.source) === null || _c === void 0 ? void 0 : _c.pvc) === null || _d === void 0 ? void 0 : _d.namespace;
    return (React.createElement(Controller, { render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value;
            return (React.createElement(FormGroup, { fieldId: diskSourcePVCNamespaceFieldID, id: diskSourcePVCNamespaceFieldID, isRequired: true, label: t('PersistentVolumeClaim project') },
                React.createElement(InlineFilterSelect, { options: projectNames === null || projectNames === void 0 ? void 0 : projectNames.map(function (name) { return ({
                        children: name,
                        groupVersionKind: modelToGroupVersionKind(ProjectModel),
                        value: name,
                    }); }), setSelected: function (val) {
                        onChange(val);
                        setValue(DATAVOLUME_PVC_NAME, null, {
                            shouldValidate: true,
                        });
                    }, toggleProps: {
                        isFullWidth: true,
                        placeholder: t('Select Project'),
                    }, selected: value }),
                React.createElement(FormGroupHelperText, { validated: error ? ValidatedOptions.error : ValidatedOptions.default }, error ? error === null || error === void 0 ? void 0 : error.message : t('Location of the existing PVC'))));
        }, control: control, name: DATAVOLUME_PVC_NAMESPACE, rules: { required: t('Project is required.') } }));
};
export default DiskSourcePVCSelectNamespace;
//# sourceMappingURL=DiskSourceClonePVCSelectNamespace.js.map