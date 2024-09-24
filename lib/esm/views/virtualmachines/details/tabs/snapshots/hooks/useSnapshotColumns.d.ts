import { V1beta1VirtualMachineSnapshot } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare const useSnapshotColumns: () => TableColumn<V1beta1VirtualMachineSnapshot>[];
export default useSnapshotColumns;
