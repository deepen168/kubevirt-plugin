import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
export declare type NetworkInterfaceRowProps = {
    obj: NetworkPresentation;
};
declare const NetworkInterfaceRow: FC<RowProps<NetworkPresentation, {
    onUpdateVM?: (updateVM: V1VirtualMachine) => Promise<void>;
}>>;
export default NetworkInterfaceRow;
