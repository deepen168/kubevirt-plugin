import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machine-configuration-tab-search.scss';
declare type VirtualMachineConfigurationTabSearchProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachineConfigurationTabSearch: FC<VirtualMachineConfigurationTabSearchProps>;
export default VirtualMachineConfigurationTabSearch;
