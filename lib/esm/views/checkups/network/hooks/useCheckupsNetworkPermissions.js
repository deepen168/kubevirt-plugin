import { useMemo } from 'react';
import { ClusterRoleBindingModel, ClusterRoleModel, modelToGroupVersionKind, ServiceAccountModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useActiveNamespace, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { findObjectByName } from '../../utils/utils';
import { KIAGNOSE_CONFIGMAP_ACCESS, KUBEVIRT_VM_LATENCY_CHECKER, VM_LATENCY_CHECKUP_SA, } from '../utils/utils';
var useCheckupsNetworkPermissions = function () {
    var namespace = useActiveNamespace()[0];
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ServiceAccountModel),
        isList: true,
        namespace: namespace,
    }), serviceAccounts = _a[0], loadingServiceAccounts = _a[1];
    var _b = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ClusterRoleModel),
        isList: true,
    }), roles = _b[0], loadingRoles = _b[1];
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ClusterRoleBindingModel),
        isList: true,
    }), roleBinding = _c[0], loadingRolesBinding = _c[1];
    var isLatencyRole = useMemo(function () { return findObjectByName(roles, KUBEVIRT_VM_LATENCY_CHECKER); }, [roles]);
    var isConfigMapRole = useMemo(function () { return findObjectByName(roles, KIAGNOSE_CONFIGMAP_ACCESS); }, [roles]);
    var isLatencyRoleBinding = useMemo(function () { return findObjectByName(roleBinding, KUBEVIRT_VM_LATENCY_CHECKER); }, [roleBinding]);
    var isConfigMapRoleBinding = useMemo(function () { return findObjectByName(roleBinding, KIAGNOSE_CONFIGMAP_ACCESS); }, [roleBinding]);
    var isServiceAccount = useMemo(function () { return findObjectByName(serviceAccounts, VM_LATENCY_CHECKUP_SA); }, [serviceAccounts]);
    return {
        isPermitted: Boolean(isServiceAccount &&
            isLatencyRole &&
            isConfigMapRole &&
            isLatencyRoleBinding &&
            isConfigMapRoleBinding),
        loading: !loadingServiceAccounts && !loadingRoles && !loadingRolesBinding,
    };
};
export default useCheckupsNetworkPermissions;
//# sourceMappingURL=useCheckupsNetworkPermissions.js.map