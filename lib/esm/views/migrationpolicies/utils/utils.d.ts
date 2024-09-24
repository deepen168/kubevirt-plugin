import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getBooleanText: (value: boolean) => string;
export declare const getBandwidthPerMigrationText: (bandwidth: number | string) => string;
export declare const getCompletionTimeoutText: (completionTimeout: number) => string;
export declare const getEmptyMigrationPolicy: () => V1alpha1MigrationPolicy;
