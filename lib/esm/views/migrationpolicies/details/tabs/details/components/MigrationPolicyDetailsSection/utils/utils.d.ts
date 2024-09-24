import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const ensureMigrationPolicyMatchLabels: (mp: V1alpha1MigrationPolicy, labels: {
    [key: string]: string;
}, selector: string) => V1alpha1MigrationPolicy;
