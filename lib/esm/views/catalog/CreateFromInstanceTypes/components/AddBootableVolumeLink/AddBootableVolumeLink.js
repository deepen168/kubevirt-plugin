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
import './AddBootableVolumeLink.scss';
var AddBootableVolumeLink = function (_a) {
    var hidePopover = _a.hidePopover, loadError = _a.loadError, text = _a.text;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useInstanceTypeVMStore(), onSelectCreatedVolume = _b.onSelectCreatedVolume, volumeListNamespace = _b.volumeListNamespace;
    var _c = useCanCreateBootableVolume(volumeListNamespace), canCreateDS = _c.canCreateDS, canCreatePVC = _c.canCreatePVC;
    var canCreate = canCreateDS || canCreatePVC;
    return (React.createElement(Button, { onClick: function () {
            hidePopover === null || hidePopover === void 0 ? void 0 : hidePopover();
            createModal(function (props) { return (React.createElement(AddBootableVolumeModal, __assign({ onCreateVolume: onSelectCreatedVolume }, props))); });
        }, className: "add-bootable-volume-link__inline-text", isDisabled: !!loadError || !canCreate, variant: ButtonVariant.link }, text || t('Add Volume')));
};
export default AddBootableVolumeLink;
//# sourceMappingURL=AddBootableVolumeLink.js.map