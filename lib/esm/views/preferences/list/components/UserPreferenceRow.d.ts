import { FC } from 'react';
import { V1beta1VirtualMachinePreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare const UserPreferenceRow: FC<RowProps<V1beta1VirtualMachinePreference>>;
export default UserPreferenceRow;
