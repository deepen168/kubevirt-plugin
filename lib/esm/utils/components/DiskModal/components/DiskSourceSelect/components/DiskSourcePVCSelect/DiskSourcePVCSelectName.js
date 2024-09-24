import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePVCs from '@kubevirt-utils/hooks/usePVCs';
import { getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { FormGroup, ValidatedOptions } from '@patternfly/react-core';
import { PVC_CLAIMNAME_FIELD } from '../../../utils/constants';
import { diskSourcePVCNameFieldID } from '../../utils/constants';
var DiskSourcePVCSelectName = function (_a) {
    var _b, _c;
    var vmNamespace = _a.vmNamespace;
    var t = useKubevirtTranslation().t;
    var _d = useFormContext(), control = _d.control, errors = _d.formState.errors;
    var _e = usePVCs(vmNamespace), pvcs = _e[0], pvcsLoaded = _e[1];
    var pvcNames = useMemo(function () { return pvcs === null || pvcs === void 0 ? void 0 : pvcs.map(getName); }, [pvcs]);
    if (!pvcsLoaded)
        return React.createElement(Loading, null);
    var error = (_c = (_b = errors === null || errors === void 0 ? void 0 : errors.volume) === null || _b === void 0 ? void 0 : _b.persistentVolumeClaim) === null || _c === void 0 ? void 0 : _c.claimName;
    return (React.createElement(Controller, { render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value;
            return (React.createElement(FormGroup, { fieldId: diskSourcePVCNameFieldID, id: diskSourcePVCNameFieldID, isRequired: true, label: t('PersistentVolumeClaim name') },
                React.createElement(InlineFilterSelect, { options: pvcNames === null || pvcNames === void 0 ? void 0 : pvcNames.map(function (name) { return ({
                        children: name,
                        groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
                        value: name,
                    }); }), toggleProps: {
                        isDisabled: isEmpty(vmNamespace),
                        isFullWidth: true,
                        placeholder: t('Select PersistentVolumeClaim'),
                    }, selected: value, setSelected: onChange }),
                error && (React.createElement(FormGroupHelperText, { validated: ValidatedOptions.error }, error === null || error === void 0 ? void 0 : error.message))));
        }, control: control, name: PVC_CLAIMNAME_FIELD, rules: { required: t('PersistentVolumeClaim is required.') } }));
};
export default DiskSourcePVCSelectName;
//# sourceMappingURL=DiskSourcePVCSelectName.js.map