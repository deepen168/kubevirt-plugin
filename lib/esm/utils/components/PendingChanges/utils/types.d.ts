export declare type PendingChange = {
    appliedOnLiveMigration?: boolean;
    handleAction: () => void;
    hasPendingChange: boolean;
    label: string;
    tabLabel: string;
};
export declare type NICHotPlugPendingChanges = {
    nicHotPlugPendingChanges: PendingChange[];
    nicNonHotPlugPendingChanges: PendingChange[];
};
