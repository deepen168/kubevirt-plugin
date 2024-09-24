import { FC } from 'react';
import { V1VirtualMachineInstanceSpec } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type NodeSelectorProps = {
    nodeSelector: V1VirtualMachineInstanceSpec['nodeSelector'];
};
declare const NodeSelectorDetailItem: FC<NodeSelectorProps>;
export default NodeSelectorDetailItem;
