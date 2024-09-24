import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
export declare const getStatusFilter: () => RowFilter[];
export declare const getSourceNodeFilter: (vmis: V1VirtualMachineInstance[]) => RowFilter[];
export declare const getTargetNodeFilter: (vmis: V1VirtualMachineInstance[]) => RowFilter[];
