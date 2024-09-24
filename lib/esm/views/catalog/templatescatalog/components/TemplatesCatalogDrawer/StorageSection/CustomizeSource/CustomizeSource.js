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
import React, { useCallback } from 'react';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateImportURLs } from '@kubevirt-utils/resources/template';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Divider } from '@patternfly/react-core';
import { useDrawerContext } from '../../hooks/useDrawerContext';
import BootCDCheckbox from '../BootCDCheckboxLabel';
import { addInstallationCDRom, removeCDInstallation } from '../cd';
import { BLANK_SOURCE_NAME, CD_SOURCES, DISK_SOURCES_WITH_DEFAULT, INSTALLATION_CDROM_NAME, } from '../constants';
import DriversCheckbox from '../DriversCheckbox';
import { getDiskSource, getRegistryHelperText, overrideVirtualMachineDataVolumeSpec, } from '../utils';
import StorageClassSelect from './StorageClassSelect/StorageClassSelect';
import SelectCDSourcePopOver from './SelectCDSourcePopOver';
import SelectDiskSourcePopOver from './SelectDiskSourcePopOver';
import { SelectSource } from './SelectSource';
import { getGenericSourceCustomization, getQuantityFromSource } from './utils';
import './CustomizeSource.scss';
export var CustomizeSource = function (_a) {
    var _b;
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var _c = useDrawerContext(), cdUpload = _c.cdUpload, diskUpload = _c.diskUpload, setCDFile = _c.setCDFile, setDiskFile = _c.setDiskFile, setStorageClassName = _c.setStorageClassName, setVM = _c.setVM, storageClassName = _c.storageClassName, storageClassRequired = _c.storageClassRequired, vm = _c.vm;
    var diskSource = getDiskSource(vm, ROOTDISK);
    var cdSource = getDiskSource(vm, INSTALLATION_CDROM_NAME);
    var httpSourceHelperURL = (_b = getTemplateImportURLs(template)) === null || _b === void 0 ? void 0 : _b[0];
    var registrySourceHelperText = getRegistryHelperText(template);
    var onCDCheckboxChange = useCallback(function (checked) {
        var newVM = checked ? addInstallationCDRom(vm, { image: '' }) : removeCDInstallation(vm);
        var blankSource = getGenericSourceCustomization(BLANK_SOURCE_NAME, null, getQuantityFromSource(diskSource));
        var vmToUpdate = overrideVirtualMachineDataVolumeSpec(newVM, blankSource);
        setVM(vmToUpdate);
    }, [vm, diskSource, setVM]);
    var onCDSourceChange = useCallback(function (customSource) {
        setVM(addInstallationCDRom(vm, customSource));
    }, [vm, setVM]);
    var onDiskSourceChange = useCallback(function (customSource) {
        var newVM = overrideVirtualMachineDataVolumeSpec(vm, customSource);
        setVM(newVM);
    }, [vm, setVM]);
    var onStorageClassChange = function (value) {
        setStorageClassName(value);
        var source = __assign({}, diskSource);
        var updatedSource = __assign(__assign({}, source), { storage: __assign(__assign({}, source.storage), { storageClassName: value }) });
        onDiskSourceChange(updatedSource);
    };
    return (React.createElement("div", { className: "storage-section__customize-source" },
        React.createElement(BootCDCheckbox, { hasCDSource: !isEmpty(cdSource), onChange: onCDCheckboxChange }),
        cdSource && (React.createElement(React.Fragment, null,
            React.createElement(SelectSource, { "data-test-id": "cd-boot-source", httpSourceHelperURL: httpSourceHelperURL, onFileSelected: setCDFile, onSourceChange: onCDSourceChange, registrySourceHelperText: registrySourceHelperText, relevantUpload: cdUpload, selectedSource: cdSource, sourceLabel: t('CD source'), sourceOptions: CD_SOURCES, sourcePopOver: React.createElement(SelectCDSourcePopOver, null) }),
            React.createElement(Divider, { className: "divider" }))),
        React.createElement(SelectSource, { "data-test-id": "disk-boot-source", httpSourceHelperURL: httpSourceHelperURL, onFileSelected: setDiskFile, onSourceChange: onDiskSourceChange, registrySourceHelperText: registrySourceHelperText, relevantUpload: diskUpload, selectedSource: diskSource, sourceLabel: t('Disk source'), sourceOptions: DISK_SOURCES_WITH_DEFAULT, sourcePopOver: React.createElement(SelectDiskSourcePopOver, null), withSize: diskSource && !('image' in diskSource) }),
        React.createElement(StorageClassSelect, { onStorageClassChange: onStorageClassChange, storageClassName: storageClassName, storageClassRequired: storageClassRequired }),
        React.createElement(Divider, { className: "divider" }),
        React.createElement(DriversCheckbox, null)));
};
//# sourceMappingURL=CustomizeSource.js.map