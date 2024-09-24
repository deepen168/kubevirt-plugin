import { ProgressVariant } from '@patternfly/react-core';
export declare enum MetricsTabExpendedSections {
    'migration' = "migration",
    'network' = "network",
    'storage' = "storage",
    'utilization' = "utilization"
}
export declare const getMigrationProgressVariant: (percentage: number, isFailed: boolean) => null | ProgressVariant;
