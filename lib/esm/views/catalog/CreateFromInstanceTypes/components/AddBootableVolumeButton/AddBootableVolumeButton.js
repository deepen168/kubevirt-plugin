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
import React from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import AddBootableVolumeModal from '@kubevirt-utils/components/AddBootableVolumeModal/AddBootableVolumeModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useCanCreateBootableVolume from '@kubevirt-utils/resources/bootableresources/hooks/useCanCreateBootableVolume';
import { Button, ButtonVariant } from '@patternfly/react-core';
var AddBootableVolumeButton = function (_a) {
    var loadError = _a.loadError;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useInstanceTypeVMStore(), onSelectCreatedVolume = _b.onSelectCreatedVolume, volumeListNamespace = _b.volumeListNamespace;
    var _c = useCanCreateBootableVolume(volumeListNamespace), canCreateDS = _c.canCreateDS, canCreatePVC = _c.canCreatePVC;
    var canCreate = canCreateDS || canCreatePVC;
    return (React.createElement(Button, { onClick: function () {
            return createModal(function (props) { return (React.createElement(AddBootableVolumeModal, __assign({ onCreateVolume: onSelectCreatedVolume }, props))); });
        }, id: "tour-step-add-volume", isDisabled: !!loadError || !canCreate, variant: ButtonVariant.secondary }, t('Add volume')));
};
export default AddBootableVolumeButton;
//# sourceMappingURL=AddBootableVolumeButton.js.map