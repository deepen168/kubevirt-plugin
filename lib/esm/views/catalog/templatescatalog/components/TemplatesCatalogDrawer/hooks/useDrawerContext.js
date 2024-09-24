import React, { createContext, useCallback, useContext, useEffect, useMemo, useState, } from 'react';
import produce from 'immer';
import { useImmer } from 'use-immer';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { useCDIUpload, } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
import useDefaultStorageClass from '@kubevirt-utils/hooks/useDefaultStorage/useDefaultStorageClass';
import { getName } from '@kubevirt-utils/resources/shared';
import { getTemplateVirtualMachineObject, replaceTemplateVM, useVMTemplateSource, } from '@kubevirt-utils/resources/template';
import useVMTemplateGeneratedParams from '@kubevirt-utils/resources/template/hooks/useVMTemplateGeneratedParams';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { getDiskSource } from '../StorageSection/utils';
import { initialValue } from './constants';
import useDefaultVMSource from './useDefaultVMSource';
var useDrawer = function (template) {
    var _a = useImmer(template), customizedTemplate = _a[0], setCustomizedTemplate = _a[1];
    var _b = useState(null), sshDetails = _b[0], setSSHDetails = _b[1];
    var _c = useVMTemplateSource(template), isBootSourceAvailable = _c.isBootSourceAvailable, bootSourceLoaded = _c.loaded;
    var _d = useCDIUpload(), diskUpload = _d.upload, uploadDiskData = _d.uploadData;
    var _e = useCDIUpload(), cdUpload = _e.upload, uploadCDData = _e.uploadData;
    var _f = useState(), diskFile = _f[0], setDiskFile = _f[1];
    var _g = useState(), cdFile = _g[0], setCDFile = _g[1];
    var _h = useState(null), storageClassName = _h[0], setStorageClassName = _h[1];
    var _j = useVMTemplateGeneratedParams(template), templateWithGeneratedParams = _j[0], loading = _j[1], error = _j[2];
    var _k = useDefaultStorageClass()[0], clusterDefaultStorageClass = _k.clusterDefaultStorageClass, virtDefaultStorageClass = _k.virtDefaultStorageClass;
    var vm = useMemo(function () { return getTemplateVirtualMachineObject(customizedTemplate); }, [customizedTemplate]);
    var templateBootSourceStorageClass = useMemo(function () {
        var _a, _b;
        return (_b = (_a = getDiskSource(getTemplateVirtualMachineObject(template), ROOTDISK)) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.storageClassName;
    }, [template]);
    var _l = useDefaultVMSource(vm), isDefaultDiskSource = _l.isDefaultDiskSource, updateDefaultDiskSource = _l.updateDefaultDiskSource;
    var setVM = useCallback(function (newVM) {
        setCustomizedTemplate(replaceTemplateVM(customizedTemplate, newVM));
    }, [setCustomizedTemplate, customizedTemplate]);
    useEffect(function () {
        if (!templateWithGeneratedParams)
            return;
        updateDefaultDiskSource(getTemplateVirtualMachineObject(templateWithGeneratedParams));
        var templateWithRunning = produce(templateWithGeneratedParams, function (draftTemplate) {
            var _a;
            var draftVM = getTemplateVirtualMachineObject(draftTemplate);
            if (isEmpty((_a = draftVM === null || draftVM === void 0 ? void 0 : draftVM.spec) === null || _a === void 0 ? void 0 : _a.runStrategy))
                draftVM.spec.running = true;
        });
        setCustomizedTemplate(templateWithRunning);
    }, [setCustomizedTemplate, templateWithGeneratedParams, updateDefaultDiskSource]);
    return {
        bootSourceLoaded: bootSourceLoaded,
        cdFile: cdFile,
        cdUpload: cdUpload,
        diskFile: diskFile,
        diskUpload: diskUpload,
        isBootSourceAvailable: isDefaultDiskSource ? isBootSourceAvailable : true,
        setCDFile: setCDFile,
        setDiskFile: setDiskFile,
        setSSHDetails: setSSHDetails,
        setStorageClassName: setStorageClassName,
        setTemplate: setCustomizedTemplate,
        setVM: setVM,
        sshDetails: sshDetails,
        storageClassName: storageClassName,
        storageClassRequired: isEmpty(templateBootSourceStorageClass) &&
            isEmpty(getName(virtDefaultStorageClass)) &&
            isEmpty(getName(clusterDefaultStorageClass)),
        template: customizedTemplate || template,
        templateDataLoaded: !!templateWithGeneratedParams && !loading && bootSourceLoaded,
        templateLoadingError: error,
        uploadCDData: uploadCDData,
        uploadDiskData: uploadDiskData,
        vm: vm,
    };
};
export var DrawerContext = createContext(initialValue);
export var DrawerContextProvider = function (_a) {
    var children = _a.children, template = _a.template;
    var context = useDrawer(template);
    return React.createElement(DrawerContext.Provider, { value: context }, children);
};
export var useDrawerContext = function () { return useContext(DrawerContext); };
//# sourceMappingURL=useDrawerContext.js.map