import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare const useMigrationPoliciesListColumns: () => [
    TableColumn<V1alpha1MigrationPolicy>[],
    TableColumn<V1alpha1MigrationPolicy>[],
    boolean
];
export default useMigrationPoliciesListColumns;
