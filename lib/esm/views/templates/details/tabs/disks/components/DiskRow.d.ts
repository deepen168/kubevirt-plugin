import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { DiskRowDataLayout } from '@kubevirt-utils/resources/vm/utils/disk/constants';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare type AdditionalRowData = {
    actionsDisabled: boolean;
    onUpdate: (vm: V1VirtualMachine) => Promise<void>;
    vm: V1VirtualMachine;
};
declare const DiskRow: React.FC<RowProps<DiskRowDataLayout, AdditionalRowData>>;
export default DiskRow;
