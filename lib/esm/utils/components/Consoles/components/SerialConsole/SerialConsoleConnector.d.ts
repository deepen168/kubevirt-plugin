import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SerialConsoleConnectorProps = React.HTMLProps<HTMLDivElement> & {
    vmi: V1VirtualMachineInstance;
};
declare const SerialConsoleConnector: React.FC<SerialConsoleConnectorProps>;
export default SerialConsoleConnector;
