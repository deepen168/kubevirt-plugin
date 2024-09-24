import { Dispatch, FC, SetStateAction } from 'react';
declare type StorageClassSelectProps = {
    checkSC?: (selectedSC: string) => boolean;
    setShowSCAlert: Dispatch<SetStateAction<boolean>>;
};
declare const StorageClassSelect: FC<StorageClassSelectProps>;
export default StorageClassSelect;
