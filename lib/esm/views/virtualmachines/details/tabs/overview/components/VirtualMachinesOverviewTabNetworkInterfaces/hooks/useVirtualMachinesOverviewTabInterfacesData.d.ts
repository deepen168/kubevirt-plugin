import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { InterfacesData } from '../utils/types';
declare type UseVirtualMachinesOverviewTabInterfacesData = (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance) => InterfacesData[];
declare const useVirtualMachinesOverviewTabInterfacesData: UseVirtualMachinesOverviewTabInterfacesData;
export default useVirtualMachinesOverviewTabInterfacesData;
