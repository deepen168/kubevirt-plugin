import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { useLastNamespace } from '@openshift-console/dynamic-plugin-sdk-internal';
import { ALL_NAMESPACES, ALL_NAMESPACES_SESSION_KEY as ALL_NAMESPACES_ACTIVE_KEY, } from './constants';
export var buildNSPath = function (namespace) {
    return [ALL_NAMESPACES, ALL_NAMESPACES_ACTIVE_KEY].includes(namespace)
        ? ALL_NAMESPACES
        : "ns/".concat(namespace);
};
export var useLastNamespacePath = function () {
    var lastNamespace = useLastNamespace()[0];
    var activeNamespace = useActiveNamespace()[0];
    return !lastNamespace ? buildNSPath(activeNamespace) : buildNSPath(lastNamespace);
};
//# sourceMappingURL=useLastNamespacePath.js.map