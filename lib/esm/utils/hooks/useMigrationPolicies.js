import { MigrationPolicyModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useMigrationPolicies = function (fieldSelector, selector) {
    return useK8sWatchResource({
        fieldSelector: fieldSelector,
        groupVersionKind: MigrationPolicyModelGroupVersionKind,
        isList: true,
        namespaced: false,
        selector: selector,
    });
};
export default useMigrationPolicies;
//# sourceMappingURL=useMigrationPolicies.js.map