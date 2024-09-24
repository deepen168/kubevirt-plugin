import React from 'react';
import { setSessionStorageTabsData, setSessionStorageVM } from './utils/session';
export var useWizardVMEffects = function (vm, tabsData) {
    // session storage effects
    React.useEffect(function () {
        // whenever the vm changes, save the vm in session storage
        if (vm) {
            setSessionStorageVM(vm);
        }
    }, [vm]);
    React.useEffect(function () {
        // whenever the tabs data changes, save the data in session storage
        if (tabsData) {
            setSessionStorageTabsData(tabsData);
        }
    }, [tabsData]);
};
//# sourceMappingURL=useWizardVMEffects.js.map