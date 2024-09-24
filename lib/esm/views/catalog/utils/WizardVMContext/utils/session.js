var VM_CACHE_KEY = 'wizard-vm-cache';
var TABS_DATA_CACHE_KEY = 'wizard-tabs-data-cache';
export var setSessionStorageVM = function (value) {
    try {
        window.sessionStorage.setItem(VM_CACHE_KEY, JSON.stringify(value));
    }
    catch (e) { }
};
export var getSessionStorageVM = function () {
    try {
        var value = window.sessionStorage.getItem(VM_CACHE_KEY);
        return value ? JSON.parse(value) : undefined;
    }
    catch (e) {
        return undefined;
    }
};
export var setSessionStorageTabsData = function (value) {
    try {
        window.sessionStorage.setItem(TABS_DATA_CACHE_KEY, JSON.stringify(value));
    }
    catch (e) { }
};
export var getSessionStorageTabsData = function () {
    try {
        var value = window.sessionStorage.getItem(TABS_DATA_CACHE_KEY);
        return value ? JSON.parse(value) : {};
    }
    catch (e) {
        return {};
    }
};
export var clearSessionStorageVM = function () {
    try {
        window.sessionStorage.removeItem(VM_CACHE_KEY);
        window.sessionStorage.removeItem(TABS_DATA_CACHE_KEY);
    }
    catch (e) { }
};
//# sourceMappingURL=session.js.map