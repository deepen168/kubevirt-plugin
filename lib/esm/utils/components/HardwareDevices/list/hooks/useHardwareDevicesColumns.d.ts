import { V1GPU, V1HostDevice } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare const useHardwareDevicesColumns: () => TableColumn<V1GPU | V1HostDevice>[];
export default useHardwareDevicesColumns;
