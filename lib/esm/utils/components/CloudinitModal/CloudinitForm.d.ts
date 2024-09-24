import { FC } from 'react';
import { V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { CloudInitNetworkData, CloudInitUserData } from './utils/cloudinit-utils';
declare type CloudinitFormProps = {
    cloudInitVolume: V1Volume;
    enableNetworkData: boolean;
    networkData: CloudInitNetworkData;
    onEditorSave: (yaml: string) => void;
    setEnableNetworkData: (value: boolean) => void;
    setSubmitDisabled: (value: boolean) => void;
    showEditor: boolean;
    updateNetworkField: (key: keyof CloudInitNetworkData, value: string) => void;
    updateUserField: (key: keyof CloudInitUserData, value: string) => void;
    userData: CloudInitUserData;
};
declare const CloudinitForm: FC<CloudinitFormProps>;
export default CloudinitForm;
