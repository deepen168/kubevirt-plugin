import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { bytesToDiskSize } from '@catalog/utils/quantity';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import { removeByteSuffix } from '@kubevirt-utils/components/CapacityInput/utils';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePVCs from '@kubevirt-utils/hooks/usePVCs';
import { convertResourceArrayToMap, getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { FormGroup, ValidatedOptions } from '@patternfly/react-core';
import { DATAVOLUME_PVC_NAME, DATAVOLUME_PVC_NAMESPACE, DISK_SIZE_FIELD, } from '../../../utils/constants';
import { getErrorPVCName } from '../../../utils/selectors';
import { diskSourcePVCNameFieldID } from '../../utils/constants';
var DiskSourceClonePVCSelectName = function () {
    var t = useKubevirtTranslation().t;
    var _a = useFormContext(), control = _a.control, errors = _a.formState.errors, setValue = _a.setValue, watch = _a.watch;
    var namespace = watch(DATAVOLUME_PVC_NAMESPACE);
    var _b = usePVCs(namespace), pvcs = _b[0], pvcsLoaded = _b[1];
    var pvcNames = useMemo(function () { return pvcs === null || pvcs === void 0 ? void 0 : pvcs.map(getName); }, [pvcs]);
    var pvcMapper = convertResourceArrayToMap(pvcs);
    if (!pvcsLoaded)
        return React.createElement(Loading, null);
    var error = getErrorPVCName(errors);
    return (React.createElement(Controller, { render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value;
            return (React.createElement(FormGroup, { fieldId: diskSourcePVCNameFieldID, id: diskSourcePVCNameFieldID, isRequired: true, label: t('PersistentVolumeClaim name') },
                React.createElement(InlineFilterSelect, { options: pvcNames === null || pvcNames === void 0 ? void 0 : pvcNames.map(function (name) { return ({
                        children: name,
                        groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
                        value: name,
                    }); }), setSelected: function (pvcName) {
                        var _a, _b, _c;
                        onChange(pvcName);
                        var selectedPVC = pvcMapper[pvcName];
                        var selectedPVCSize = (_c = (_b = (_a = selectedPVC === null || selectedPVC === void 0 ? void 0 : selectedPVC.spec) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.requests) === null || _c === void 0 ? void 0 : _c.storage;
                        setValue(DISK_SIZE_FIELD, removeByteSuffix(bytesToDiskSize(selectedPVCSize)));
                    }, toggleProps: {
                        isDisabled: isEmpty(namespace),
                        isFullWidth: true,
                        placeholder: t('Select PersistentVolumeClaim'),
                    }, selected: value }),
                error && (React.createElement(FormGroupHelperText, { validated: ValidatedOptions.error }, error === null || error === void 0 ? void 0 : error.message))));
        }, rules: {
            required: t('PersistentVolumeClaim is required.'),
        }, control: control, name: DATAVOLUME_PVC_NAME }));
};
export default DiskSourceClonePVCSelectName;
//# sourceMappingURL=DiskSourceClonePVCSelectName.js.map