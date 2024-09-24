import * as React from 'react';
import { V1Disk, V1Interface } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type BootOrderProps = {
    disks: V1Disk[];
    interfaces: V1Interface[];
};
declare const BootOrder: React.FC<BootOrderProps>;
export default BootOrder;
