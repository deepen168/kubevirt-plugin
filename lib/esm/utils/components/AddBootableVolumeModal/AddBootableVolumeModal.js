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
import React, { useCallback, useState } from 'react';
import { DEFAULT_PREFERENCE_LABEL } from '@catalog/CreateFromInstanceTypes/utils/constants';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useCDIUpload } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
import { UPLOAD_STATUS } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useStorageProfileClaimPropertySets from '@kubevirt-utils/hooks/useStorageProfileClaimPropertySets';
import { getValidNamespace, kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Form, PopoverPosition, Title } from '@patternfly/react-core';
import SchedulingSettings from './components/SchedulingSettings';
import SourceTypeSelection from './components/SourceTypeSelection/SourceTypeSelection';
import VolumeDestination from './components/VolumeDestination/VolumeDestination';
import VolumeMetadata from './components/VolumeMetadata/VolumeMetadata';
import VolumeSource from './components/VolumeSource/VolumeSource';
import { DROPDOWN_FORM_SELECTION, emptyDataSource, initialBootableVolumeState, } from './utils/constants';
import { createBootableVolume } from './utils/utils';
import './AddBootableVolumeModal.scss';
var AddBootableVolumeModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onCreateVolume = _a.onCreateVolume;
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var namespace = getValidNamespace(activeNamespace);
    var _b = useState(__assign(__assign({}, initialBootableVolumeState), { bootableVolumeNamespace: namespace })), bootableVolume = _b[0], setBootableVolume = _b[1];
    var _c = useState(DROPDOWN_FORM_SELECTION.UPLOAD_VOLUME), sourceType = _c[0], setSourceType = _c[1];
    var applyStorageProfileState = useState(true);
    var _d = useCDIUpload(), upload = _d.upload, uploadData = _d.uploadData;
    var claimPropertySetsData = useStorageProfileClaimPropertySets(bootableVolume === null || bootableVolume === void 0 ? void 0 : bootableVolume.storageClassName);
    var labels = (bootableVolume || {}).labels;
    var setBootableVolumeField = useCallback(function (key, fieldKey) { return function (value) {
        return setBootableVolume(function (prevState) {
            var _a, _b, _c;
            return (__assign(__assign({}, prevState), (fieldKey
                ? (_a = {}, _a[key] = __assign(__assign({}, prevState[key]), (_b = {}, _b[fieldKey] = value, _b)), _a) : __assign(__assign({}, prevState), (_c = {}, _c[key] = value, _c)))));
        });
    }; }, []);
    var deleteLabel = function (labelKey) {
        setBootableVolume(function (prev) {
            var updatedLabels = __assign({}, prev === null || prev === void 0 ? void 0 : prev.labels);
            delete updatedLabels[labelKey];
            return __assign(__assign({}, prev), { labels: updatedLabels });
        });
    };
    return (React.createElement(TabModal, { onClose: function () {
            if ((upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.UPLOADING) {
                upload.cancelUpload().catch(kubevirtConsole.error);
            }
            onClose();
        }, onSubmit: createBootableVolume({
            applyStorageProfileSettings: applyStorageProfileState[0],
            bootableVolume: bootableVolume,
            claimPropertySets: claimPropertySetsData === null || claimPropertySetsData === void 0 ? void 0 : claimPropertySetsData.claimPropertySets,
            onCreateVolume: onCreateVolume,
            sourceType: sourceType,
            uploadData: uploadData,
        }), headerText: t('Add volume'), isDisabled: !(labels === null || labels === void 0 ? void 0 : labels[DEFAULT_PREFERENCE_LABEL]), isOpen: isOpen, obj: emptyDataSource, submitBtnText: t('Save') },
        t('Add a new bootable volume to the cluster.'),
        React.createElement(Form, { className: "pf-u-mt-md" },
            React.createElement(SourceTypeSelection, { formSelection: sourceType, namespace: namespace, setFormSelection: setSourceType }),
            React.createElement(Title, { headingLevel: "h5" }, t('Source details')),
            React.createElement(VolumeSource, { bootableVolume: bootableVolume, setBootableVolumeField: setBootableVolumeField, sourceType: sourceType, upload: upload }),
            sourceType === DROPDOWN_FORM_SELECTION.USE_REGISTRY && (React.createElement(SchedulingSettings, { bootableVolume: bootableVolume, setBootableVolumeField: setBootableVolumeField })),
            React.createElement(Title, { className: "pf-u-mt-md", headingLevel: "h5" }, t('Destination details')),
            React.createElement(VolumeDestination, { applyStorageProfileState: applyStorageProfileState, bootableVolume: bootableVolume, claimPropertySetsData: claimPropertySetsData, setBootableVolumeField: setBootableVolumeField }),
            React.createElement(Title, { className: "pf-u-mt-md", headingLevel: "h5" },
                t('Volume metadata'),
                ' ',
                React.createElement(HelpTextIcon, { bodyContent: t('Set the volume metadata to use the volume as a bootable image.'), helpIconClassName: "add-bootable-volume-modal__title-help-text-icon", position: PopoverPosition.right })),
            React.createElement(VolumeMetadata, { bootableVolume: bootableVolume, deleteLabel: deleteLabel, setBootableVolumeField: setBootableVolumeField }))));
};
export default AddBootableVolumeModal;
//# sourceMappingURL=AddBootableVolumeModal.js.map