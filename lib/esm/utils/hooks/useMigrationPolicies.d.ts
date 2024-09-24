import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Selector } from '@openshift-console/dynamic-plugin-sdk';
declare const useMigrationPolicies: (fieldSelector?: string, selector?: Selector) => import("@openshift-console/dynamic-plugin-sdk").WatchK8sResult<V1alpha1MigrationPolicy[]>;
export default useMigrationPolicies;
