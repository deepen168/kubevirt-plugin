import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseMigrationPercentage = (vm: V1VirtualMachine | V1VirtualMachineInstance) => {
    endTimestamp: string;
    isFailed: boolean;
    percentage: number | undefined;
};
declare const useMigrationPercentage: UseMigrationPercentage;
export default useMigrationPercentage;
