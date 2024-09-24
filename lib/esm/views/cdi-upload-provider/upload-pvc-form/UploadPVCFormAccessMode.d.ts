import { FC } from 'react';
declare type UploadPVCFormAccessModeProps = {
    availableAccessModes?: string[];
    initialAccessMode?: string;
    loaded: boolean;
    onChange: (accessMode: string) => void;
    provisioner: string;
};
declare const UploadPVCFormAccessMode: FC<UploadPVCFormAccessModeProps>;
export default UploadPVCFormAccessMode;
