import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
export var createConfigurationSearchURL = function (tab, element, pathname) {
    var index = pathname === null || pathname === void 0 ? void 0 : pathname.lastIndexOf(VirtualMachineDetailsTab.Configurations);
    var substr = pathname.slice(0, index);
    return substr + "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(tab, "#").concat(element);
};
export var getSearchItemsIds = function (searchItems) {
    return searchItems.map(function (item) { return item.id; });
};
//# sourceMappingURL=utils.js.map