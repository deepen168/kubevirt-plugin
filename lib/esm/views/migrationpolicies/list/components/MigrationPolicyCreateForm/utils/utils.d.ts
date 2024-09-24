import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { BinaryUnit } from '@kubevirt-utils/utils/units';
export declare type InitialMigrationPolicyState = {
    allowAutoConverge?: boolean;
    allowPostCopy?: boolean;
    bandwidthPerMigration?: {
        unit: BinaryUnit;
        value: number;
    };
    completionTimeoutPerGiB?: number;
    description?: string;
    migrationPolicyName: string;
    namespaceSelectorMatchLabel: {
        [key: string]: string;
    };
    vmiSelectorMatchLabel: {
        [key: string]: string;
    };
};
export declare const initialMigrationPolicyState: InitialMigrationPolicyState;
export declare const produceMigrationPolicy: (state: InitialMigrationPolicyState) => V1alpha1MigrationPolicy;
