import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DetailsProps = {
    pathname: string;
    vmi: V1VirtualMachineInstance;
};
declare const Details: React.FC<DetailsProps>;
export default Details;
