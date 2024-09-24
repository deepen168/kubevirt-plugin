import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { DEFAULT_PREFERENCE_LABEL } from '../../../utils/constants';
export var getBootVolumeOS = function (bootVolume) {
    var _a, _b, _c;
    var bootVolumePreference = (_b = (_a = bootVolume === null || bootVolume === void 0 ? void 0 : bootVolume.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[DEFAULT_PREFERENCE_LABEL];
    return ((_c = Object.values(OS_NAME_TYPES).find(function (osName) { return bootVolumePreference === null || bootVolumePreference === void 0 ? void 0 : bootVolumePreference.includes(osName); })) !== null && _c !== void 0 ? _c : OS_NAME_TYPES.other);
};
export var getPaginationFromVolumeIndex = function (volumeIndex) {
    return function (prevPagination) {
        if (volumeIndex < 0) {
            return prevPagination;
        }
        var perPage = prevPagination.perPage;
        var page = Math.floor(volumeIndex / perPage) + 1;
        var startIndex = (page - 1) * perPage;
        var endIndex = page * perPage;
        return {
            endIndex: endIndex,
            page: page,
            perPage: perPage,
            startIndex: startIndex,
        };
    };
};
//# sourceMappingURL=utils.js.map