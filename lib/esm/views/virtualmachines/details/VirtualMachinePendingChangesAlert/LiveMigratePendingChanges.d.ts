import { FC } from 'react';
import { PendingChange } from '@kubevirt-utils/components/PendingChanges/utils/types';
declare type LiveMigratePendingChangesProps = {
    pendingChanges: PendingChange[];
};
declare const LiveMigratePendingChanges: FC<LiveMigratePendingChangesProps>;
export default LiveMigratePendingChanges;
