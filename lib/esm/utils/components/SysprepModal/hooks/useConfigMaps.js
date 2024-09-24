import { ConfigMapModel, modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { AUTOUNATTEND, UNATTEND } from '../sysprep-utils';
var checkEqualCaseInsensitive = function (a, b) {
    return a.localeCompare(b, 'en', { sensitivity: 'base' }) === 0;
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
var useSysprepConfigMaps = function (namespace) {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ConfigMapModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), configmaps = _a[0], configmapsLoaded = _a[1], configmapsError = _a[2];
    var sysprepConfigMaps = configmaps === null || configmaps === void 0 ? void 0 : configmaps.filter(function (configmap) {
        if (isEmpty(configmap === null || configmap === void 0 ? void 0 : configmap.data))
            return false;
        var dataKeys = Object.keys(configmap === null || configmap === void 0 ? void 0 : configmap.data);
        var hasSysprepXMLData = dataKeys.some(function (key) {
            return (checkEqualCaseInsensitive(key, UNATTEND) || checkEqualCaseInsensitive(key, AUTOUNATTEND));
        });
        return hasSysprepXMLData;
    });
    return [sysprepConfigMaps, configmapsLoaded, configmapsError];
};
export default useSysprepConfigMaps;
//# sourceMappingURL=useConfigMaps.js.map