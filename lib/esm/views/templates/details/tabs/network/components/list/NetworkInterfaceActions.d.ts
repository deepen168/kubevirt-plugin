import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
declare type NetworkInterfaceActionsProps = {
    nicName: string;
    nicPresentation: NetworkPresentation;
    template: V1Template;
};
declare const NetworkInterfaceActions: FC<NetworkInterfaceActionsProps>;
export default NetworkInterfaceActions;
