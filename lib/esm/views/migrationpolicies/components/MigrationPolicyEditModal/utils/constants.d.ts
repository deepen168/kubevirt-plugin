import { BinaryUnit } from '@kubevirt-utils/utils/units';
export declare type EditMigrationPolicyInitialState = {
    allowAutoConverge?: boolean;
    allowPostCopy?: boolean;
    bandwidthPerMigration?: {
        unit: BinaryUnit;
        value: number;
    };
    completionTimeoutPerGiB?: number;
    migrationPolicyName: string;
};
export declare type MigrationPolicyStateDispatch = {
    unit: BinaryUnit;
    value: number;
} | boolean | number | string;
