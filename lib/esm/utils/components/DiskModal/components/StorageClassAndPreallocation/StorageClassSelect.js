import React, { useCallback, useEffect, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import useDefaultStorageClass from '@kubevirt-utils/hooks/useDefaultStorage/useDefaultStorageClass';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { StorageClassModel } from '@kubevirt-utils/models';
import { convertResourceArrayToMap, getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { FormGroup } from '@patternfly/react-core';
import { STORAGE_CLASS_FIELD, STORAGE_CLASS_PROVIDER_FIELD, STORAGECLASS_SELECT_FIELDID, } from '../utils/constants';
import { getSCSelectOptions } from './utils/helpers';
var StorageClassSelect = function (_a) {
    var checkSC = _a.checkSC, setShowSCAlert = _a.setShowSCAlert;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), control = _b.control, setValue = _b.setValue, watch = _b.watch;
    var storageClass = watch(STORAGE_CLASS_FIELD);
    var _c = useDefaultStorageClass(), _d = _c[0], clusterDefaultStorageClass = _d.clusterDefaultStorageClass, storageClasses = _d.storageClasses, loaded = _c[1];
    var defaultSC = useMemo(function () { return clusterDefaultStorageClass; }, [clusterDefaultStorageClass]);
    var scMapper = useMemo(function () { return convertResourceArrayToMap(storageClasses); }, [storageClasses]);
    var onSelect = useCallback(function (selection) {
        var _a;
        setShowSCAlert(checkSC ? checkSC(selection) : false);
        setValue(STORAGE_CLASS_FIELD, selection);
        setValue(STORAGE_CLASS_PROVIDER_FIELD, (_a = scMapper[selection]) === null || _a === void 0 ? void 0 : _a.provisioner);
    }, [checkSC, scMapper, setShowSCAlert, setValue]);
    useEffect(function () {
        if (isEmpty(storageClass) && loaded && !isEmpty(defaultSC)) {
            setValue(STORAGE_CLASS_FIELD, getName(defaultSC));
            setValue(STORAGE_CLASS_PROVIDER_FIELD, defaultSC === null || defaultSC === void 0 ? void 0 : defaultSC.provisioner);
        }
    }, [defaultSC, storageClass, loaded, setValue]);
    if (!loaded)
        return React.createElement(Loading, null);
    return (React.createElement(FormGroup, { fieldId: STORAGECLASS_SELECT_FIELDID, label: t('StorageClass') },
        React.createElement("div", { "data-test-id": STORAGECLASS_SELECT_FIELDID },
            React.createElement(Controller, { render: function (_a) {
                    var value = _a.field.value;
                    return (React.createElement(InlineFilterSelect, { toggleProps: {
                            isFullWidth: true,
                            placeholder: t('Select {{label}}', { label: StorageClassModel.label }),
                        }, options: getSCSelectOptions(storageClasses), popperProps: { enableFlip: true }, selected: value, setSelected: onSelect }));
                }, control: control, name: STORAGE_CLASS_FIELD }))));
};
export default StorageClassSelect;
//# sourceMappingURL=StorageClassSelect.js.map