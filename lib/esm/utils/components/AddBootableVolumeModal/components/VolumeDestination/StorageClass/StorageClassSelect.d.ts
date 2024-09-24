import { Dispatch, FC, SetStateAction } from 'react';
declare type StorageClassSelectProps = {
    checkSC?: (selectedSC: string) => boolean;
    setShowSCAlert: Dispatch<SetStateAction<boolean>>;
    setStorageClassName: (value: string) => void;
    setStorageClassProvisioner?: Dispatch<SetStateAction<string>>;
    storageClass: string;
};
declare const StorageClassSelect: FC<StorageClassSelectProps>;
export default StorageClassSelect;
