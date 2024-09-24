import React, { useCallback, useEffect, useMemo } from 'react';
import { getDefaultStorageClass, getSCSelectOptions, } from '@kubevirt-utils/components/DiskModal/components/StorageClassAndPreallocation/utils/helpers';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, StorageClassModel } from '@kubevirt-utils/models';
import { getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { FormGroup } from '@patternfly/react-core';
var StorageClassSelect = function (_a) {
    var _b;
    var checkSC = _a.checkSC, setShowSCAlert = _a.setShowSCAlert, setStorageClassName = _a.setStorageClassName, setStorageClassProvisioner = _a.setStorageClassProvisioner, storageClass = _a.storageClass;
    var t = useKubevirtTranslation().t;
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(StorageClassModel),
        isList: true,
    }), storageClasses = _c[0], loaded = _c[1];
    var defaultSC = useMemo(function () { return getDefaultStorageClass(storageClasses); }, [storageClasses]);
    var onSelect = useCallback(function (selection) {
        var _a;
        setShowSCAlert(checkSC ? checkSC(selection) : false);
        setStorageClassName(selection);
        setStorageClassProvisioner === null || setStorageClassProvisioner === void 0 ? void 0 : setStorageClassProvisioner((_a = (storageClasses || []).find(function (sc) { return getName(sc) === selection; })) === null || _a === void 0 ? void 0 : _a.provisioner);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [storageClasses]);
    useEffect(function () {
        var _a;
        if (!storageClass && loaded && !isEmpty(defaultSC)) {
            setStorageClassName((_a = defaultSC === null || defaultSC === void 0 ? void 0 : defaultSC.metadata) === null || _a === void 0 ? void 0 : _a.name);
            setStorageClassProvisioner === null || setStorageClassProvisioner === void 0 ? void 0 : setStorageClassProvisioner(defaultSC === null || defaultSC === void 0 ? void 0 : defaultSC.provisioner);
        }
    }, [defaultSC, setStorageClassName, setStorageClassProvisioner, storageClass, loaded]);
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { fieldId: "storage-class", label: t('StorageClass') },
            React.createElement("div", { "data-test-id": "storage-class-select" }, loaded ? (React.createElement(InlineFilterSelect, { toggleProps: {
                    isFullWidth: true,
                    placeholder: t('Select {{label}}', { label: StorageClassModel.label }),
                }, options: getSCSelectOptions(storageClasses), popperProps: { enableFlip: true }, selected: storageClass || ((_b = defaultSC === null || defaultSC === void 0 ? void 0 : defaultSC.metadata) === null || _b === void 0 ? void 0 : _b.name), setSelected: onSelect })) : (React.createElement(Loading, null))))));
};
export default StorageClassSelect;
//# sourceMappingURL=StorageClassSelect.js.map