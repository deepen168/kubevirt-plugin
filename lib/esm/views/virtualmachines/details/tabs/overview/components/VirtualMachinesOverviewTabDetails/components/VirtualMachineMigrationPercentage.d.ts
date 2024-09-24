import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachineMigrationPercentageProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachineMigrationPercentage: FC<VirtualMachineMigrationPercentageProps>;
export default VirtualMachineMigrationPercentage;
