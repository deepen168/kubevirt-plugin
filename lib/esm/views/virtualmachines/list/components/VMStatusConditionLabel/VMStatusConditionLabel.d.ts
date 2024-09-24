import { FC } from 'react';
import { V1VirtualMachineCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const VMStatusConditionLabel: FC<V1VirtualMachineCondition>;
export declare const VMStatusConditionLabelList: FC<{
    conditions: V1VirtualMachineCondition[];
}>;
