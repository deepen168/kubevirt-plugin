var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ModalVariant } from '@patternfly/react-core';
import BootableVolumeList from '../../BootableVolumeList';
var BootableVolumeListModal = function (_a) {
    var favorites = _a.favorites, isOpen = _a.isOpen, onClose = _a.onClose, onSelect = _a.onSelect, restProps = __rest(_a, ["favorites", "isOpen", "onClose", "onSelect"]);
    var t = useKubevirtTranslation().t;
    var instanceTypeVMState = useInstanceTypeVMStore().instanceTypeVMState;
    var selectedBootableVolume = instanceTypeVMState.selectedBootableVolume;
    var selectedBootableVolumeState = useState(selectedBootableVolume);
    var onSave = function () {
        onSelect(selectedBootableVolumeState[0]);
        onClose();
        return Promise.resolve();
    };
    return (React.createElement(TabModal, { headerText: t('Available volumes'), isOpen: isOpen, modalVariant: ModalVariant.large, onClose: onClose, onSubmit: onSave, submitBtnText: t('Select') },
        React.createElement(BootableVolumeList, __assign({ favorites: favorites, selectedBootableVolumeState: selectedBootableVolumeState }, restProps))));
};
export default BootableVolumeListModal;
//# sourceMappingURL=BootableVolumeListModal.js.map