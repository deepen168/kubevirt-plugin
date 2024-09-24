import * as React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type NetworkInterfaceListProps = {
    template: V1Template;
};
declare const NetworkInterfaceList: React.FC<NetworkInterfaceListProps>;
export default NetworkInterfaceList;
