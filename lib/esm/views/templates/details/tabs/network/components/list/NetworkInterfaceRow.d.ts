import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
export declare type NetworkInterfaceRowProps = {
    obj: NetworkPresentation;
};
declare const NetworkInterfaceRow: FC<RowProps<NetworkPresentation, {
    template: V1Template;
}>>;
export default NetworkInterfaceRow;
