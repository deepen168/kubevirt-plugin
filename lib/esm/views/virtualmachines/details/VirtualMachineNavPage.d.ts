import React from 'react';
import './virtual-machine-page.scss';
export declare type VirtualMachineDetailsPageProps = {
    kind: string;
    name: string;
    namespace: string;
};
declare const VirtualMachineNavPage: React.FC<VirtualMachineDetailsPageProps>;
export default VirtualMachineNavPage;
