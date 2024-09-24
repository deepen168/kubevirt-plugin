import { FC } from 'react';
import { V1Network, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
export declare type NetworkInterfaceRowProps = {
    obj: NetworkPresentation;
};
declare const NetworkInterfaceRow: FC<RowProps<NetworkPresentation, {
    isPending: (network: V1Network) => boolean;
    vm: V1VirtualMachine;
}>>;
export default NetworkInterfaceRow;
