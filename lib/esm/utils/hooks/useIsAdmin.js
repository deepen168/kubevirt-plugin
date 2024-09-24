import { useFlag } from '@openshift-console/dynamic-plugin-sdk';
/**
 * Hook that returns true if the current user is an admin.
 */
export var useIsAdmin = function () { return useFlag('CAN_LIST_NS'); };
//# sourceMappingURL=useIsAdmin.js.map