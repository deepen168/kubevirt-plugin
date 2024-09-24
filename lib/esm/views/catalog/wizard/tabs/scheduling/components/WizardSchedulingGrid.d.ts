import { FC } from 'react';
import { UpdateValidatedVM } from '@catalog/utils/WizardVMContext';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type WizardSchedulingGridProps = {
    updateVM: UpdateValidatedVM;
    vm: V1VirtualMachine;
};
declare const WizardSchedulingGrid: FC<WizardSchedulingGridProps>;
export default WizardSchedulingGrid;
