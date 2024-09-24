import { VirtualMachineDetailsTab, VirtualMachineDetailsTabLabel, } from '@kubevirt-utils/constants/tabs-constants';
import DetailsTab from '../details/DetailsTab';
import InitialRunTab from '../initialrun/InitialRunTab';
import MetadataTab from '../metadata/MetadataTab';
import NetworkInterfaceListPage from '../network/NetworkTab';
import VirtualMachineSchedulingPage from '../scheduling/SchedulingTab';
import SSHTab from '../ssh/SSHTab';
import StorageTab from '../storage/StorageTab';
export var tabs = [
    {
        Component: DetailsTab,
        name: VirtualMachineDetailsTab.Details,
        title: VirtualMachineDetailsTabLabel.Details,
    },
    {
        Component: StorageTab,
        name: VirtualMachineDetailsTab.Storage,
        title: VirtualMachineDetailsTabLabel.Storage,
    },
    {
        Component: NetworkInterfaceListPage,
        name: VirtualMachineDetailsTab.Network,
        title: VirtualMachineDetailsTabLabel.Network,
    },
    {
        Component: VirtualMachineSchedulingPage,
        name: VirtualMachineDetailsTab.Scheduling,
        title: VirtualMachineDetailsTabLabel.Scheduling,
    },
    {
        Component: SSHTab,
        name: VirtualMachineDetailsTab.SSH,
        title: VirtualMachineDetailsTabLabel.SSH,
    },
    {
        Component: InitialRunTab,
        name: VirtualMachineDetailsTab['Initial-run'],
        title: VirtualMachineDetailsTabLabel['Initial-run'],
    },
    {
        Component: MetadataTab,
        name: VirtualMachineDetailsTab.Metadata,
        title: VirtualMachineDetailsTabLabel.Metadata,
    },
];
export var innerTabs = tabs.reduce(function (acc, _a) {
    var name = _a.name;
    acc[name] = name;
    return acc;
}, {});
export var getInnerTabFromPath = function (path) {
    return innerTabs[path.slice(path.lastIndexOf('/') + 1)];
};
export var includesConfigurationPath = function (path, append) {
    var index = path.lastIndexOf("".concat(VirtualMachineDetailsTab.Configurations));
    var substr = path.slice(0, index);
    return substr + append;
};
//# sourceMappingURL=utils.js.map