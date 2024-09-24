import * as React from 'react';
import { V1VirtualMachineInstanceGuestOSUser } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare type ActiveUserListRowProps = RowProps<V1VirtualMachineInstanceGuestOSUser, {
    kind: string;
}>;
declare const ActiveUserListRowVm: React.FC<ActiveUserListRowProps>;
export default ActiveUserListRowVm;
