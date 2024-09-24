import { getName } from '@kubevirt-utils/resources/shared';
export var getResourceDropdownOptions = function (resources, groupVersionKind, onClick, group) {
    var _a, _b;
    return (_b = (_a = resources === null || resources === void 0 ? void 0 : resources.map(getName)) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a.localeCompare(b); })) === null || _b === void 0 ? void 0 : _b.map(function (opt) { return ({
        children: opt,
        group: group,
        groupVersionKind: groupVersionKind,
        onClick: onClick,
        value: opt,
    }); });
};
//# sourceMappingURL=utils.js.map