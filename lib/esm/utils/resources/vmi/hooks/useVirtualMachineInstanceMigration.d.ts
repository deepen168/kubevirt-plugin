import { V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare const useVirtualMachineInstanceMigration: (resource: K8sResourceCommon) => V1VirtualMachineInstanceMigration;
export default useVirtualMachineInstanceMigration;
