import { FC } from 'react';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare const ClusterPreferenceRow: FC<RowProps<V1beta1VirtualMachineClusterPreference>>;
export default ClusterPreferenceRow;
