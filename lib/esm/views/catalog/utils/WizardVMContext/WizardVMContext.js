import * as React from 'react';
import { useImmer } from 'use-immer';
import { getSessionStorageTabsData, getSessionStorageVM } from './utils/session';
import { useValidatedVM } from './useValidatedVm';
import { useWizardVMEffects } from './useWizardVMEffects';
export var useWizardVM = function () {
    var _a = useValidatedVM(getSessionStorageVM()), error = _a.error, loaded = _a.loaded, updateVM = _a.updateVM, vm = _a.vm;
    var _b = useImmer(getSessionStorageTabsData()), tabsData = _b[0], updateTabsData = _b[1];
    var _c = React.useState(false), disableVmCreate = _c[0], setDisableVmCreate = _c[1];
    useWizardVMEffects(vm, tabsData);
    return {
        disableVmCreate: disableVmCreate,
        error: error,
        loaded: loaded,
        setDisableVmCreate: setDisableVmCreate,
        tabsData: tabsData,
        updateTabsData: updateTabsData,
        updateVM: updateVM,
        vm: vm,
    };
};
export var WizardVMContext = React.createContext({});
export var WizardVMContextProvider = function (_a) {
    var children = _a.children;
    var context = useWizardVM();
    return React.createElement(WizardVMContext.Provider, { value: context }, children);
};
export var useWizardVMContext = function () { return React.useContext(WizardVMContext); };
//# sourceMappingURL=WizardVMContext.js.map