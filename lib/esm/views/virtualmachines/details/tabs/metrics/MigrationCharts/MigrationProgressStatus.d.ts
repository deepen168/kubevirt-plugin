import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationProgressStatusProps = {
    vmi: V1VirtualMachineInstance;
};
declare const MigrationProgressStatus: React.FC<MigrationProgressStatusProps>;
export default MigrationProgressStatus;
