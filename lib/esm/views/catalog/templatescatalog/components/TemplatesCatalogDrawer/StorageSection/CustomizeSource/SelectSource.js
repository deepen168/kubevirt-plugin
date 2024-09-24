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
import React, { useRef, } from 'react';
import CapacityInput from '@kubevirt-utils/components/CapacityInput/CapacityInput';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { appendDockerPrefix } from '@kubevirt-utils/utils/utils';
import { BLANK_SOURCE_NAME, CONTAINER_DISK_SOURCE_NAME, DEFAULT_SOURCE, HTTP_SOURCE_NAME, PVC_SOURCE_NAME, REGISTRY_SOURCE_NAME, UPLOAD_SOURCE_NAME, } from '../constants';
import ContainerSource from './Sources/ContainerSource';
import HTTPSource from './Sources/HTTPSource';
import { PersistentVolumeClaimSelect } from './Sources/PersistentVolumeClaimSelect';
import UploadSource from './Sources/UploadSource';
import SelectSourceOption from './SelectSourceOption';
import { getContainerDiskSource, getGenericSourceCustomization, getPVCSource, getQuantityFromSource, getSourceTypeFromDiskSource, } from './utils';
export var SelectSource = function (_a) {
    var _b, _c, _d, _e;
    var testId = _a["data-test-id"], httpSourceHelperURL = _a.httpSourceHelperURL, onFileSelected = _a.onFileSelected, onSourceChange = _a.onSourceChange, registrySourceHelperText = _a.registrySourceHelperText, relevantUpload = _a.relevantUpload, selectedSource = _a.selectedSource, sourceLabel = _a.sourceLabel, sourceOptions = _a.sourceOptions, sourcePopOver = _a.sourcePopOver, _f = _a.withSize, withSize = _f === void 0 ? false : _f;
    var t = useKubevirtTranslation().t;
    var initialDiskSource = useRef(selectedSource);
    var volumeQuantity = getQuantityFromSource(selectedSource);
    var pvcNameSelected = (_c = (_b = selectedSource === null || selectedSource === void 0 ? void 0 : selectedSource.source) === null || _b === void 0 ? void 0 : _b.pvc) === null || _c === void 0 ? void 0 : _c.name;
    var pvcNamespaceSelected = (_e = (_d = selectedSource === null || selectedSource === void 0 ? void 0 : selectedSource.source) === null || _d === void 0 ? void 0 : _d.pvc) === null || _e === void 0 ? void 0 : _e.namespace;
    var setVolumeQuantity = function (value) {
        var newSource = __assign(__assign({}, selectedSource), { storage: __assign(__assign({}, ((selectedSource === null || selectedSource === void 0 ? void 0 : selectedSource.storage) || {})), { resources: {
                    requests: {
                        storage: value,
                    },
                } }) });
        onSourceChange(newSource);
    };
    var selectedSourceType = selectedSource === initialDiskSource.current && sourceOptions.includes(DEFAULT_SOURCE)
        ? DEFAULT_SOURCE
        : getSourceTypeFromDiskSource(selectedSource);
    var showSizeInput = withSize ||
        selectedSourceType === HTTP_SOURCE_NAME ||
        selectedSourceType === UPLOAD_SOURCE_NAME;
    var onSourceTypeChange = function (selection) {
        var _a;
        var _b;
        var newVolume = showSizeInput ? volumeQuantity : null;
        var storageClassName = (_b = selectedSource === null || selectedSource === void 0 ? void 0 : selectedSource.storage) === null || _b === void 0 ? void 0 : _b.storageClassName;
        var handlers = (_a = {},
            _a[BLANK_SOURCE_NAME] = function () {
                return getGenericSourceCustomization(selection, null, null, storageClassName);
            },
            _a[CONTAINER_DISK_SOURCE_NAME] = function () { return getContainerDiskSource(''); },
            _a[DEFAULT_SOURCE] = function () { return initialDiskSource.current; },
            _a[HTTP_SOURCE_NAME] = function () {
                return getGenericSourceCustomization(selection, '', newVolume, storageClassName);
            },
            _a[PVC_SOURCE_NAME] = function () { return getPVCSource('', '', newVolume, storageClassName); },
            _a[REGISTRY_SOURCE_NAME] = function () {
                return getGenericSourceCustomization(selection, appendDockerPrefix(''), newVolume, storageClassName);
            },
            _a[UPLOAD_SOURCE_NAME] = function () {
                return getGenericSourceCustomization(selection, null, null, storageClassName);
            },
            _a);
        if (selection !== UPLOAD_SOURCE_NAME) {
            onFileSelected(null);
        }
        onSourceChange(handlers[selection]());
    };
    var onInputValueChange = function (event) {
        var _a;
        var newVolume = showSizeInput ? volumeQuantity : null;
        var newValue = event.currentTarget.value;
        var handlers = (_a = {},
            _a[CONTAINER_DISK_SOURCE_NAME] = function () { return getContainerDiskSource(appendDockerPrefix(newValue)); },
            _a[HTTP_SOURCE_NAME] = function () {
                return getGenericSourceCustomization(selectedSourceType, newValue, newVolume);
            },
            _a[REGISTRY_SOURCE_NAME] = function () {
                return getGenericSourceCustomization(selectedSourceType, appendDockerPrefix(newValue), newVolume);
            },
            _a);
        onSourceChange(handlers[selectedSourceType]());
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(SelectSourceOption, { "data-test-id": testId, label: sourceLabel, onSelectSource: onSourceTypeChange, options: sourceOptions, popOver: sourcePopOver, selectedSource: selectedSourceType }),
        selectedSourceType === PVC_SOURCE_NAME && (React.createElement(PersistentVolumeClaimSelect, { currentSize: volumeQuantity, "data-test-id": "".concat(testId, "-pvc-select"), onSourceChange: onSourceChange, projectSelected: pvcNamespaceSelected, pvcNameSelected: pvcNameSelected })),
        selectedSourceType === HTTP_SOURCE_NAME && (React.createElement(HTTPSource, { httpSourceHelperURL: httpSourceHelperURL, onInputValueChange: onInputValueChange, testId: testId })),
        selectedSourceType === UPLOAD_SOURCE_NAME && (React.createElement(UploadSource, { onFileSelected: onFileSelected, relevantUpload: relevantUpload, testId: testId })),
        [CONTAINER_DISK_SOURCE_NAME, REGISTRY_SOURCE_NAME].includes(selectedSourceType) && (React.createElement(ContainerSource, { onInputValueChange: onInputValueChange, registrySourceHelperText: registrySourceHelperText, selectedSourceType: selectedSourceType, testId: testId })),
        showSizeInput && selectedSourceType !== CONTAINER_DISK_SOURCE_NAME && (React.createElement(CapacityInput, { label: t('Disk size'), onChange: setVolumeQuantity, size: volumeQuantity }))));
};
//# sourceMappingURL=SelectSource.js.map