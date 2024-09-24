import React from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput } from '@patternfly/react-core';
import { DROPDOWN_FORM_SELECTION } from '../../utils/constants';
import DiskSourceUploadPVC from './components/DiskSourceUploadPVC';
import PVCSource from './components/PVCSource';
import SnapshotSource from './components/SnapshotSource';
var VolumeSource = function (_a) {
    var _b;
    var bootableVolume = _a.bootableVolume, setBootableVolumeField = _a.setBootableVolumeField, sourceType = _a.sourceType, upload = _a.upload;
    var t = useKubevirtTranslation().t;
    var _c = bootableVolume || {}, registryURL = _c.registryURL, uploadFile = _c.uploadFile, uploadFilename = _c.uploadFilename;
    var sourceComponentByType = (_b = {},
        _b[DROPDOWN_FORM_SELECTION.UPLOAD_VOLUME] = (React.createElement(DiskSourceUploadPVC, { isIso: bootableVolume.isIso, label: t('Upload PVC image'), relevantUpload: upload, setIsIso: setBootableVolumeField('isIso'), setUploadFile: setBootableVolumeField('uploadFile'), setUploadFileName: setBootableVolumeField('uploadFilename'), uploadFile: uploadFile, uploadFileName: uploadFilename })),
        _b[DROPDOWN_FORM_SELECTION.USE_EXISTING_PVC] = (React.createElement(PVCSource, { bootableVolume: bootableVolume, setBootableVolumeField: setBootableVolumeField })),
        _b[DROPDOWN_FORM_SELECTION.USE_REGISTRY] = (React.createElement(FormGroup, { fieldId: "volume-registry-url", isRequired: true, label: t('Registry URL') },
            React.createElement(TextInput, { "data-test-id": "volume-registry-url", id: "volume-registry-url", onChange: function (_, value) { return setBootableVolumeField('registryURL')(value); }, type: "text", value: registryURL }),
            React.createElement(FormGroupHelperText, null, t('Example: quay.io/containerdisks/centos:7-2009')))),
        _b[DROPDOWN_FORM_SELECTION.USE_SNAPSHOT] = (React.createElement(SnapshotSource, { bootableVolume: bootableVolume, setBootableVolumeField: setBootableVolumeField })),
        _b);
    return sourceComponentByType[sourceType];
};
export default VolumeSource;
//# sourceMappingURL=VolumeSource.js.map