var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import useVirtualMachineInstanceTypes from '@catalog/CreateFromInstanceTypes/state/hooks/useVirtualMachineInstanceTypes';
import useClusterInstanceTypes from './useClusterInstanceTypes';
import useClusterPreferences from './useClusterPreferences';
var useInstanceTypesAndPreferences = function (fieldSelector, selector) {
    var _a = useClusterInstanceTypes(fieldSelector, selector), clusterInstanceTypes = _a[0], clusterITsLoaded = _a[1], clusterITsLoadError = _a[2];
    var _b = useVirtualMachineInstanceTypes(fieldSelector, selector), vmInstanceTypes = _b[0], userITsLoaded = _b[1], userITsLoadError = _b[2];
    var _c = useClusterPreferences(fieldSelector, selector), preferences = _c[0], preferencesLoaded = _c[1], preferencesLoadError = _c[2];
    var loaded = preferencesLoaded && clusterITsLoaded && userITsLoaded;
    var loadError = preferencesLoadError || clusterITsLoadError || userITsLoadError;
    return {
        allInstanceTypes: __spreadArray(__spreadArray([], clusterInstanceTypes, true), vmInstanceTypes, true),
        clusterInstanceTypes: clusterInstanceTypes,
        loaded: loaded || Boolean(loadError),
        loadError: loadError,
        preferences: preferences,
    };
};
export default useInstanceTypesAndPreferences;
//# sourceMappingURL=useInstanceTypesAndPreferences.js.map