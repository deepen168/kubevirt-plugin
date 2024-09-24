import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useProjects from '@kubevirt-utils/hooks/useProjects';
import { FormGroup, ValidatedOptions } from '@patternfly/react-core';
import { DATAVOLUME_SNAPSHOT_NAME, DATAVOLUME_SNAPSHOT_NAMESPACE } from '../../../utils/constants';
import { getErrorSnapshotNamespace } from '../../../utils/selectors';
import { diskSourceSnapshotVolumeNamespaceFieldID } from '../../utils/constants';
var DiskSourceSnapshotVolumeSelectNamespace = function () {
    var t = useKubevirtTranslation().t;
    var _a = useFormContext(), control = _a.control, errors = _a.formState.errors, setValue = _a.setValue;
    var _b = useProjects(), projectNames = _b[0], projectsLoaded = _b[1];
    if (!projectsLoaded)
        return React.createElement(Loading, null);
    var error = getErrorSnapshotNamespace(errors);
    return (React.createElement(Controller, { render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value;
            return (React.createElement(FormGroup, { fieldId: diskSourceSnapshotVolumeNamespaceFieldID, id: diskSourceSnapshotVolumeNamespaceFieldID, isRequired: true, label: t('VolumeSnapshot project') },
                React.createElement(InlineFilterSelect, { options: projectNames === null || projectNames === void 0 ? void 0 : projectNames.map(function (name) { return ({
                        children: name,
                        groupVersionKind: modelToGroupVersionKind(ProjectModel),
                        value: name,
                    }); }), setSelected: function (val) {
                        onChange(val);
                        setValue(DATAVOLUME_SNAPSHOT_NAME, null, {
                            shouldValidate: true,
                        });
                    }, toggleProps: {
                        isFullWidth: true,
                        placeholder: t('Select Project'),
                    }, selected: value }),
                React.createElement(FormGroupHelperText, { validated: error ? ValidatedOptions.error : ValidatedOptions.default }, error ? error === null || error === void 0 ? void 0 : error.message : t('Location of the existing VolumeSnapshot'))));
        }, control: control, name: DATAVOLUME_SNAPSHOT_NAMESPACE, rules: { required: t('Project is required.') } }));
};
export default DiskSourceSnapshotVolumeSelectNamespace;
//# sourceMappingURL=DiskSourceSnapshotVolumeSelectNamespace.js.map