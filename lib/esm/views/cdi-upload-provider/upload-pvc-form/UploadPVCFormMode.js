import React from 'react';
import { initialAccessModes } from '@kubevirt-utils/components/DiskModal/components/utils/modesMapping';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import UploadPVCFormAccessMode from './UploadPVCFormAccessMode';
import UploadPVCFormModeVolumeMode from './UploadPVCFormVolumeMode';
var UploadPVCFormMode = function (_a) {
    var _b;
    var accessMode = _a.accessMode, applySP = _a.applySP, setAccessMode = _a.setAccessMode, setVolumeMode = _a.setVolumeMode, storageClasses = _a.storageClasses, storageClassName = _a.storageClassName, volumeMode = _a.volumeMode;
    var t = useKubevirtTranslation().t;
    var provisioner = ((_b = storageClasses === null || storageClasses === void 0 ? void 0 : storageClasses.find(function (sc) { return sc.metadata.name === storageClassName; })) === null || _b === void 0 ? void 0 : _b.provisioner) || '';
    return applySP ? (React.createElement("div", { className: "form-group", "data-test": "sp-default-settings" }, t('Access mode: {{accessMode}} / Volume mode: {{volumeMode}}', {
        accessMode: accessMode,
        volumeMode: volumeMode,
    }))) : (React.createElement("div", { "data-test": "sp-no-default-settings" },
        React.createElement("div", { className: "form-group" },
            React.createElement(UploadPVCFormAccessMode, { availableAccessModes: initialAccessModes, initialAccessMode: storageClassName ? accessMode : undefined, loaded: true, onChange: function (aMode) { return setAccessMode(aMode); }, provisioner: provisioner })),
        React.createElement("div", { className: "form-group" },
            React.createElement(UploadPVCFormModeVolumeMode, { accessMode: accessMode, loaded: true, onChange: function (vMode) { return setVolumeMode(vMode); }, provisioner: provisioner, storageClass: storageClassName, volumeMode: storageClassName ? volumeMode : undefined }))));
};
export default UploadPVCFormMode;
//# sourceMappingURL=UploadPVCFormMode.js.map