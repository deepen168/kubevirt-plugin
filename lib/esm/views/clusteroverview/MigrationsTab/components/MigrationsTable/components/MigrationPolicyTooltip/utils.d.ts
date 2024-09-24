declare type MigrationsConfigTooltipField = {
    field: string;
    getDisplayText: (value: boolean | number | string) => string;
    label: string;
};
export declare const getBooleanText: (value: boolean) => string;
export declare const getBandwidthPerMigrationText: (bandwidth: number | string) => string;
export declare const getCompletionTimeoutText: (completionTimeout: number) => string;
export declare const migrationsConfigTooltipFields: MigrationsConfigTooltipField[];
export {};
