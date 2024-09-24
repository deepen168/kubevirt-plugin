import { FC } from 'react';
import { IoK8sApiRbacV1ClusterRoleBinding } from '@kubevirt-ui/kubevirt-api/kubernetes';
import './CheckupsStorageListEmptyState.scss';
declare type CheckupsStorageListEmptyStateProps = {
    clusterRoleBinding: IoK8sApiRbacV1ClusterRoleBinding;
    isPermitted: boolean;
    isPermittedToInstall: boolean;
    loadingPermissions: boolean;
};
declare const CheckupsStorageListEmptyState: FC<CheckupsStorageListEmptyStateProps>;
export default CheckupsStorageListEmptyState;
