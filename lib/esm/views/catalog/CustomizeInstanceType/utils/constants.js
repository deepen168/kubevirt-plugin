import { VirtualMachineDetailsTab, VirtualMachineDetailsTabLabel, } from '@kubevirt-utils/constants/tabs-constants';
import CustomizeInstanceTypeConfigurationTab from '../tabs/configuration/CustomizeInstanceTypeConfigurationTab';
import CustomizeInstanceTypeYamlTab from '../tabs/yaml/CustomizeInstanceTypeYamlTab';
export var pages = [
    {
        component: CustomizeInstanceTypeYamlTab,
        href: '',
        name: VirtualMachineDetailsTabLabel.YAML,
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: VirtualMachineDetailsTab.Configurations,
        name: VirtualMachineDetailsTabLabel.Configuration,
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.SSH),
        isHidden: true,
        name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.SSH),
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab['Initial-run']),
        isHidden: true,
        name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab['Initial-run']),
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Storage),
        isHidden: true,
        name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Storage),
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Details),
        isHidden: true,
        name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Details),
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Metadata),
        isHidden: true,
        name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Metadata),
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Network),
        isHidden: true,
        name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Network),
    },
    {
        component: CustomizeInstanceTypeConfigurationTab,
        href: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Scheduling),
        isHidden: true,
        name: "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineDetailsTab.Scheduling),
    },
];
//# sourceMappingURL=constants.js.map