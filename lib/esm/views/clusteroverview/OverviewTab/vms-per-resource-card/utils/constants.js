import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineClusterInstancetypeModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineClusterInstancetypeModel';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var vmsPerResourceOptions = [
    {
        title: t('Show VirtualMachine per Templates'),
        type: TemplateModel.kind,
    },
    {
        title: t('Show VirtualMachine per InstanceTypes'),
        type: VirtualMachineClusterInstancetypeModel.kind,
    },
];
//# sourceMappingURL=constants.js.map