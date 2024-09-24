import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
declare type NetworkInterfaceActionsProps = {
    nicName: string;
    nicPresentation: NetworkPresentation;
    onUpdateVM?: (updateVM: V1VirtualMachine) => Promise<void>;
};
declare const NetworkInterfaceActions: FC<NetworkInterfaceActionsProps>;
export default NetworkInterfaceActions;
