import { FC } from 'react';
import { PendingChange } from '@kubevirt-utils/components/PendingChanges/utils/types';
declare type RestartPendingChangesProps = {
    pendingChanges: PendingChange[];
};
declare const RestartPendingChanges: FC<RestartPendingChangesProps>;
export default RestartPendingChanges;
