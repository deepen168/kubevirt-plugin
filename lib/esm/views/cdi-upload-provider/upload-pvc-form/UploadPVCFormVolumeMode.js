import React, { useMemo } from 'react';
import { Trans } from 'react-i18next';
import { getVolumeModeForProvisioner, VOLUME_MODE_RADIO_OPTIONS, } from '@kubevirt-utils/components/DiskModal/components/utils/modesMapping';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, Radio } from '@patternfly/react-core';
var UploadPVCFormModeVolumeMode = function (_a) {
    var accessMode = _a.accessMode, loaded = _a.loaded, onChange = _a.onChange, provisioner = _a.provisioner, storageClass = _a.storageClass, volumeMode = _a.volumeMode;
    var t = useKubevirtTranslation().t;
    var allowedVolumeModes = useMemo(function () { return (loaded ? getVolumeModeForProvisioner(provisioner, accessMode) : []); }, [loaded, provisioner, accessMode]);
    return (React.createElement(FormGroup, { fieldId: "volume-mode", isRequired: true, label: t('Volume mode') }, (allowedVolumeModes === null || allowedVolumeModes === void 0 ? void 0 : allowedVolumeModes.length) === 1 ? (React.createElement(React.Fragment, null, allowedVolumeModes === null || allowedVolumeModes === void 0 ? void 0 :
        allowedVolumeModes[0],
        React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            "Only ",
            { volumeMode: volumeMode },
            " volume mode is available for ",
            { storageClass: storageClass },
            " with",
            ' ',
            { accessMode: accessMode },
            " access mode"))) : (VOLUME_MODE_RADIO_OPTIONS.map(function (_a) {
        var label = _a.label, value = _a.value;
        return (React.createElement(Radio, { checked: value === volumeMode, id: value, isDisabled: !(allowedVolumeModes === null || allowedVolumeModes === void 0 ? void 0 : allowedVolumeModes.includes(value)), key: value, label: label, name: "volumeMode", onChange: function (event) { var _a; return onChange((_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.value); }, value: value }));
    }))));
};
export default UploadPVCFormModeVolumeMode;
//# sourceMappingURL=UploadPVCFormVolumeMode.js.map