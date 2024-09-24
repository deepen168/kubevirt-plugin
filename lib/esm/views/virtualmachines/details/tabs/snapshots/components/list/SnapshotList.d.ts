import { FC } from 'react';
import { UseSnapshotData } from '../../hooks/useSnapshotData';
declare type SnapshotsListProps = UseSnapshotData & {
    isVMRunning?: boolean;
};
declare const SnapshotsList: FC<SnapshotsListProps>;
export default SnapshotsList;
