import { Dispatch, FC, SetStateAction } from 'react';
declare type DiskSourcePVCSelectNameProps = {
    isDisabled?: boolean;
    onChange: Dispatch<SetStateAction<string>>;
    pvcNames: string[];
    pvcNameSelected: string;
    pvcsLoaded: boolean;
};
declare const DiskSourcePVCSelectName: FC<DiskSourcePVCSelectNameProps>;
export default DiskSourcePVCSelectName;
