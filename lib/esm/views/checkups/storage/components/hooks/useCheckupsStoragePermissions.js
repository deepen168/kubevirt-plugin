import { useMemo } from 'react';
import { findObjectByName } from 'src/views/checkups/utils/utils';
import { ClusterRoleBindingModel, modelToGroupVersionKind, RoleBindingModel, RoleModel, ServiceAccountModel, } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useActiveNamespace, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { STORAGE_CHECKUP_ROLE, STORAGE_CHECKUP_SA, STORAGE_CLUSTER_ROLE_BINDING, } from '../../utils/utils';
export var useCheckupsStoragePermissions = function () {
    var namespace = useActiveNamespace()[0];
    var isAllNamespace = namespace === ALL_NAMESPACES_SESSION_KEY;
    var _a = useK8sWatchResource(!isAllNamespace && {
        groupVersionKind: modelToGroupVersionKind(ServiceAccountModel),
        isList: true,
        namespace: namespace,
    }), serviceAccounts = _a[0], loadingServiceAccounts = _a[1];
    var _b = useK8sWatchResource(!isAllNamespace && {
        groupVersionKind: modelToGroupVersionKind(RoleModel),
        isList: true,
        namespace: namespace,
    }), roles = _b[0], loadingRoles = _b[1];
    var _c = useK8sWatchResource(!isAllNamespace && {
        groupVersionKind: modelToGroupVersionKind(ClusterRoleBindingModel),
        isList: true,
    }), clusterRoleBinding = _c[0], loadedClusterRoleBinding = _c[1];
    var _d = useK8sWatchResource(!isAllNamespace && {
        groupVersionKind: modelToGroupVersionKind(RoleBindingModel),
        isList: true,
        namespace: namespace,
    }), roleBinding = _d[0], loadingRolesBinding = _d[1];
    var isClusterRoleBinding = useMemo(function () {
        var _a;
        var crb = findObjectByName(clusterRoleBinding, STORAGE_CLUSTER_ROLE_BINDING);
        var hasSubjectMatchingNS = (_a = crb === null || crb === void 0 ? void 0 : crb.subjects) === null || _a === void 0 ? void 0 : _a.find(function (subject) { return (subject === null || subject === void 0 ? void 0 : subject.namespace) === namespace; });
        return hasSubjectMatchingNS && crb;
    }, [clusterRoleBinding, namespace]);
    var isConfigMapRole = useMemo(function () { return findObjectByName(roles, STORAGE_CHECKUP_ROLE); }, [roles]);
    var isConfigMapRoleBinding = useMemo(function () { return findObjectByName(roleBinding, STORAGE_CHECKUP_ROLE); }, [roleBinding]);
    var isServiceAccount = useMemo(function () { return findObjectByName(serviceAccounts, STORAGE_CHECKUP_SA); }, [serviceAccounts]);
    return {
        clusterRoleBinding: isClusterRoleBinding,
        isPermitted: Boolean(isServiceAccount && isConfigMapRole && isConfigMapRoleBinding && isClusterRoleBinding),
        isPermittedToInstall: !isEmpty(clusterRoleBinding),
        loading: !loadingServiceAccounts && !loadingRoles && !loadingRolesBinding && !loadedClusterRoleBinding,
    };
};
//# sourceMappingURL=useCheckupsStoragePermissions.js.map