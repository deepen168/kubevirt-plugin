import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationProgressPopoverProps = React.PropsWithChildren<{
    vmi: V1VirtualMachineInstance;
}>;
declare const MigrationProgressPopover: React.FC<MigrationProgressPopoverProps>;
export default MigrationProgressPopover;
