import { FC } from 'react';
declare type DiskSourcePVCSelectProps = {
    pvcNameSelected: string;
    pvcNamespaceSelected: string;
    selectPVCName: (value: string) => void;
    selectPVCNamespace?: (value: string) => void;
    setDiskSize?: (value: string) => void;
};
declare const DiskSourcePVCSelect: FC<DiskSourcePVCSelectProps>;
export default DiskSourcePVCSelect;
