import { PendingChange } from '@kubevirt-utils/components/PendingChanges/utils/types';
export declare const splitPendingChanges: (pendingChanges: PendingChange[]) => {
    liveMigrationChanges: PendingChange[];
    restartChanges: PendingChange[];
};
