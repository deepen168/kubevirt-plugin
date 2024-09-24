import { KubeDeschedulerModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
/**
 * A Hook that checks if Kube Descheduler operator is installed.
 * @returns {boolean} boolean value
 */
// check if the Descheduler is installed
export var useDeschedulerInstalled = function () {
    var resourceList = useK8sWatchResource({
        groupVersionKind: KubeDeschedulerModelGroupVersionKind,
        isList: false,
    })[0];
    return !isEmpty(resourceList);
};
//# sourceMappingURL=useDeschedulerInstalled.js.map