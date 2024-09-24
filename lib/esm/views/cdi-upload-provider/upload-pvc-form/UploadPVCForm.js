import React, { useEffect, useState } from 'react';
import { getDefaultStorageClass } from '@kubevirt-utils/components/DiskModal/components/StorageClassAndPreallocation/utils/helpers';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useStorageProfileClaimPropertySets from '@kubevirt-utils/hooks/useStorageProfileClaimPropertySets';
import { BinaryUnit } from '@kubevirt-utils/utils/units';
import { Alert, AlertVariant, Checkbox, FileUpload, Split, SplitItem, } from '@patternfly/react-core';
import { getGiBUploadPVCSizeByImage, getName, getNamespace, getTemplateOperatingSystems, } from '../utils/selectors';
import { updateDV } from '../utils/utils';
import UploadPVCFormGoldenImage from './UploadPVCFormGoldenImage';
import UploadPVCFormMode from './UploadPVCFormMode';
import UploadPVCFormPVCName from './UploadPVCFormPVCName';
import UploadPVCFormSize from './UploadPVCFormSize';
import UploadPVCFormStorageClass from './UploadPVCFormStorageClass';
import './upload-pvc-form.scss';
var UploadPVCForm = function (_a) {
    var _b, _c;
    var commonTemplates = _a.commonTemplates, fileName = _a.fileName, fileValue = _a.fileValue, goldenPvcs = _a.goldenPvcs, handleFileChange = _a.handleFileChange, handleFileNameChange = _a.handleFileNameChange, isLoading = _a.isLoading, ns = _a.ns, onChange = _a.onChange, osParam = _a.osParam, setDisableFormSubmit = _a.setDisableFormSubmit, setIsFileRejected = _a.setIsFileRejected, storageClasses = _a.storageClasses;
    var t = useKubevirtTranslation().t;
    var operatingSystems = getTemplateOperatingSystems(commonTemplates).filter(function (o) { return !(o === null || o === void 0 ? void 0 : o.isSourceRef); });
    var operatingSystemHaveDV = operatingSystems === null || operatingSystems === void 0 ? void 0 : operatingSystems.find(function (os) { return (os === null || os === void 0 ? void 0 : os.baseImageName) && (os === null || os === void 0 ? void 0 : os.baseImageNamespace); });
    var _d = useState(''), storageClassName = _d[0], setStorageClassName = _d[1];
    var _e = useState(''), pvcName = _e[0], setPvcName = _e[1];
    var _f = useState(ns), namespace = _f[0], setNamespace = _f[1];
    var _g = useState(''), accessMode = _g[0], setAccessMode = _g[1];
    var _h = useState(), volumeMode = _h[0], setVolumeMode = _h[1];
    var _j = useState(''), requestSizeValue = _j[0], setRequestSizeValue = _j[1];
    var _k = useState('Gi'), requestSizeUnit = _k[0], setRequestSizeUnit = _k[1];
    var _l = useState(!!osParam), isGolden = _l[0], setIsGolden = _l[1];
    var _m = useState(), os = _m[0], setOs = _m[1];
    var _o = useState(false), pvcSizeFromTemplate = _o[0], setPvcSizeFromTemplate = _o[1];
    var _p = useState(), mountAsCDROM = _p[0], setMountAsCDROM = _p[1];
    var _q = useState(false), osImageExists = _q[0], setOsImageExists = _q[1];
    var defaultSCName = (_c = (_b = getDefaultStorageClass(storageClasses)) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.name;
    var _r = useState(true), applySP = _r[0], setApplySP = _r[1];
    var _s = useStorageProfileClaimPropertySets(storageClassName || defaultSCName), claimPropertySets = _s.claimPropertySets, loadError = _s.error, spLoaded = _s.loaded;
    var _t = (claimPropertySets === null || claimPropertySets === void 0 ? void 0 : claimPropertySets[0]) || {}, spAccessMode = _t.accessModes, spVolumeMode = _t.volumeMode;
    useEffect(function () {
        var _a, _b;
        !storageClassName && setStorageClassName(defaultSCName !== null && defaultSCName !== void 0 ? defaultSCName : (_b = (_a = storageClasses === null || storageClasses === void 0 ? void 0 : storageClasses[0]) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.name);
    }, [defaultSCName, storageClassName, storageClasses]);
    useEffect(function () {
        var _a;
        var value = getGiBUploadPVCSizeByImage(fileValue === null || fileValue === void 0 ? void 0 : fileValue.size);
        var isIso = (_a = fileValue === null || fileValue === void 0 ? void 0 : fileValue.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().endsWith('.iso');
        setMountAsCDROM(isIso);
        setPvcSizeFromTemplate(!isIso);
        setRequestSizeValue(isIso ? value === null || value === void 0 ? void 0 : value.toString() : (os === null || os === void 0 ? void 0 : os.baseImageRecomendedSize[0]) || '');
        setRequestSizeUnit((os === null || os === void 0 ? void 0 : os.baseImageRecomendedSize[1]) || BinaryUnit.Gi);
    }, [fileValue, os]);
    useEffect(function () {
        if (storageClassName && spLoaded && applySP) {
            spAccessMode[0] !== accessMode && setAccessMode(spAccessMode[0]);
            spVolumeMode !== volumeMode && setVolumeMode(spVolumeMode);
        }
    }, [spLoaded, spAccessMode, spVolumeMode, accessMode, volumeMode, storageClassName, applySP]);
    useEffect(function () {
        onChange(updateDV({
            accessMode: accessMode,
            mountAsCDROM: mountAsCDROM,
            namespace: namespace,
            pvcName: pvcName,
            requestSizeUnit: requestSizeUnit,
            requestSizeValue: requestSizeValue,
            storageClassName: storageClassName,
            volumeMode: volumeMode,
        }));
    }, [
        accessMode,
        volumeMode,
        namespace,
        pvcName,
        onChange,
        mountAsCDROM,
        storageClassName,
        requestSizeValue,
        requestSizeUnit,
    ]);
    var handleGoldenCheckbox = function (checked) {
        setIsGolden(checked);
        if (checked) {
            setNamespace(os === null || os === void 0 ? void 0 : os.baseImageNamespace);
            setPvcName(pvcName && !os ? '' : os === null || os === void 0 ? void 0 : os.baseImageName);
            return;
        }
        setNamespace(ns);
    };
    var handleOs = function (newOs) {
        var operatingSystem = operatingSystems === null || operatingSystems === void 0 ? void 0 : operatingSystems.find(function (o) { return o.id === newOs; });
        setOs(operatingSystem);
        setPvcName(operatingSystem === null || operatingSystem === void 0 ? void 0 : operatingSystem.baseImageName);
        (operatingSystem === null || operatingSystem === void 0 ? void 0 : operatingSystem.baseImageNamespace) && setNamespace(operatingSystem.baseImageNamespace);
    };
    var handlePvcSizeTemplate = function (checked) {
        var _a, _b;
        setPvcSizeFromTemplate(checked);
        setRequestSizeValue(checked
            ? ((_a = os === null || os === void 0 ? void 0 : os.baseImageRecomendedSize) === null || _a === void 0 ? void 0 : _a[0]) || ''
            : (_b = getGiBUploadPVCSizeByImage(fileValue === null || fileValue === void 0 ? void 0 : fileValue.size)) === null || _b === void 0 ? void 0 : _b.toString());
    };
    useEffect(function () {
        !isLoading && osParam && handleOs(osParam);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);
    useEffect(function () {
        var goldenImagePVC = goldenPvcs === null || goldenPvcs === void 0 ? void 0 : goldenPvcs.find(function (pvc) { return getName(pvc) === (os === null || os === void 0 ? void 0 : os.baseImageName) && getNamespace(pvc) === (os === null || os === void 0 ? void 0 : os.baseImageNamespace); });
        if (goldenImagePVC) {
            setOsImageExists(true);
            setDisableFormSubmit(true);
            return;
        }
        if (osImageExists) {
            setOsImageExists(false);
            setDisableFormSubmit(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [goldenPvcs, os]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "form-group" },
            React.createElement(Alert, { isInline: true, title: t('Persistent Volume Claim creation'), variant: AlertVariant.info }, t('This Persistent Volume Claim will be created using a DataVolume through Containerized Data Importer (CDI)'))),
        React.createElement("label", { className: "control-label co-required", htmlFor: "file-upload" }, t('Upload data')),
        React.createElement("div", { className: "form-group" },
            React.createElement(FileUpload, { dropzoneProps: {
                    accept: { 'application/*': ['.iso,.img,.qcow2,.gz,.xz'] },
                    onDropAccepted: function () { return setIsFileRejected(false); },
                    onDropRejected: function () { return setIsFileRejected(true); },
                }, onClearClick: function (event) {
                    handleFileChange(event, null);
                    handleFileNameChange(event, '');
                }, onFileInputChange: function (event, file) {
                    handleFileChange(event, file);
                    handleFileNameChange(event, file.name);
                }, browseButtonText: "Upload", filename: fileName, filenamePlaceholder: "Drag and drop a file or upload one", hideDefaultPreview: true, id: "file-upload", value: fileValue }),
            operatingSystemHaveDV && (React.createElement(Checkbox, { className: "kv--create-upload__golden-switch", "data-checked-state": isGolden, id: "golden-os-switch", isChecked: isGolden, label: t('Attach this data to a Virtual Machine operating system'), onChange: function (_event, checked) { return handleGoldenCheckbox(checked); } }))),
        isGolden && (React.createElement(UploadPVCFormGoldenImage, { goldenPvcs: goldenPvcs, handleCDROMChange: function (checked) { return setMountAsCDROM(checked); }, handleOs: handleOs, handlePvcSizeTemplate: handlePvcSizeTemplate, isLoading: isLoading, mountAsCDROM: mountAsCDROM, namespace: namespace, operatingSystems: operatingSystems, os: os, osImageExists: osImageExists, pvcSizeFromTemplate: pvcSizeFromTemplate })),
        React.createElement(UploadPVCFormPVCName, { handlePvcName: function (event) { return setPvcName(event.currentTarget.value); }, isGolden: isGolden, isLoading: isLoading, pvcName: pvcName }),
        React.createElement("div", { className: "form-group" },
            React.createElement(Split, { hasGutter: true },
                React.createElement(SplitItem, { className: "kv--create-upload__flexitem" },
                    React.createElement(UploadPVCFormStorageClass, { applySP: applySP, setApplySP: setApplySP, setStorageClassName: setStorageClassName, storageClasses: storageClasses, storageClassName: storageClassName })),
                React.createElement(SplitItem, { className: "kv--create-upload__flexitem" },
                    React.createElement(UploadPVCFormSize, { requestSizeUnit: requestSizeUnit, requestSizeValue: requestSizeValue, setRequestSizeUnit: setRequestSizeUnit, setRequestSizeValue: setRequestSizeValue })))),
        !spLoaded && !loadError ? (React.createElement(Loading, null)) : (React.createElement(UploadPVCFormMode, { accessMode: spAccessMode === null || spAccessMode === void 0 ? void 0 : spAccessMode[0], applySP: applySP, setAccessMode: setAccessMode, setVolumeMode: setVolumeMode, storageClasses: storageClasses, storageClassName: storageClassName, volumeMode: volumeMode !== null && volumeMode !== void 0 ? volumeMode : spVolumeMode }))));
};
export default UploadPVCForm;
//# sourceMappingURL=UploadPVCForm.js.map