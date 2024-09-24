import { ConfigMapModel, modelToGroupVersionKind, SecretModel, ServiceAccountModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useEnvironmentsResources = function (namespace) {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(SecretModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), secrets = _a[0], secretsLoaded = _a[1], secretsError = _a[2];
    var _b = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ConfigMapModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), configMaps = _b[0], configMapsLoaded = _b[1], configMapsError = _b[2];
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ServiceAccountModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), serviceAccounts = _c[0], serviceAccountsLoaded = _c[1], serviceAccountsError = _c[2];
    return {
        configMaps: configMaps,
        error: secretsError || configMapsError || serviceAccountsError,
        loaded: serviceAccountsLoaded && configMapsLoaded && secretsLoaded,
        secrets: secrets,
        serviceAccounts: serviceAccounts,
    };
};
export default useEnvironmentsResources;
//# sourceMappingURL=useEnvironmentsResources.js.map