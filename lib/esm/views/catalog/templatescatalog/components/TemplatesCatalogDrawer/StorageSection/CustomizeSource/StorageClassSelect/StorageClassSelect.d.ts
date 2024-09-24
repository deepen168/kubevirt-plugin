import { FC } from 'react';
declare type StorageClassSelectProps = {
    onStorageClassChange: (value: string) => void;
    storageClassName: string;
    storageClassRequired: boolean;
};
declare const StorageClassSelect: FC<StorageClassSelectProps>;
export default StorageClassSelect;
