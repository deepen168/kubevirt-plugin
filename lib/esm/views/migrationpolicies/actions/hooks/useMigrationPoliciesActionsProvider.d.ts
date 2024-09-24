import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseMigrationPoliciesActionsProviderValues = [Action[], boolean];
declare type UseMigrationPoliciesActionsProvider = (mp: V1alpha1MigrationPolicy) => UseMigrationPoliciesActionsProviderValues;
declare const useMigrationPoliciesActionsProvider: UseMigrationPoliciesActionsProvider;
export default useMigrationPoliciesActionsProvider;
