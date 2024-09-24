import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NameWithPercentages } from './types';
declare type UseProvisioningPercentageType = (vmi: V1VirtualMachine) => {
    loaded: boolean;
    percentages: NameWithPercentages;
};
declare const useProvisioningPercentage: UseProvisioningPercentageType;
export default useProvisioningPercentage;
