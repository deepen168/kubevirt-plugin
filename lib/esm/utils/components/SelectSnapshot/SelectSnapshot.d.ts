import { FC } from 'react';
import './select-snapshot.scss';
declare type SelectSnapshotProps = {
    selectSnapshotName: (value: string) => void;
    selectSnapshotNamespace?: (value: string) => void;
    snapshotNameSelected: string;
    snapshotNamespaceSelected: string;
};
declare const SelectSnapshot: FC<SelectSnapshotProps>;
export default SelectSnapshot;
