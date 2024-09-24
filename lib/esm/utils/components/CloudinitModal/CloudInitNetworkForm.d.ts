import React from 'react';
import { CloudInitNetworkData } from './utils/cloudinit-utils';
declare type CloudinitNetworkFormProps = {
    enableNetworkData: boolean;
    networkData: CloudInitNetworkData;
    setEnableNetworkData: (value: boolean) => void;
    updateNetworkField: (key: keyof CloudInitNetworkData, value: string | string[]) => void;
};
export declare const CloudinitNetworkForm: React.FC<CloudinitNetworkFormProps>;
export {};
