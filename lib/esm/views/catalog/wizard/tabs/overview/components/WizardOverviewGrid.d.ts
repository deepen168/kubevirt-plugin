import { FC } from 'react';
import { UpdateValidatedVM } from '@catalog/utils/WizardVMContext';
import { TabsData } from '@catalog/utils/WizardVMContext/utils/tabs-data';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type WizardOverviewGridProps = {
    tabsData: TabsData;
    updateVM: UpdateValidatedVM;
    vm: V1VirtualMachine;
};
declare const WizardOverviewGrid: FC<WizardOverviewGridProps>;
export default WizardOverviewGrid;
