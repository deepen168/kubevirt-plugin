import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { SimplifiedAlerts } from '@kubevirt-utils/components/AlertsCard/utils/types';
declare type UseVMAlerts = (vm: V1VirtualMachine) => SimplifiedAlerts;
declare const useVMAlerts: UseVMAlerts;
export default useVMAlerts;
