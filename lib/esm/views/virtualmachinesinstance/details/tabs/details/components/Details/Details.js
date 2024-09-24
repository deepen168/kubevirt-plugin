import * as React from 'react';
import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import OwnerDetailsItem from '@kubevirt-utils/components/OwnerDetailsItem/OwnerDetailsItem';
import SSHAccess from '@kubevirt-utils/components/SSHAccess/SSHAccess';
import useSSHService from '@kubevirt-utils/components/SSHAccess/useSSHService';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getMachineType } from '@kubevirt-utils/resources/vm';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Grid, GridItem, Icon, Title } from '@patternfly/react-core';
import { LinkIcon } from '@patternfly/react-icons';
import VirtualMachinesInstancesStatus from '../../../../../components/VirtualMachinesInstancesStatus';
import useGuestOS from '../../../../hooks/useGuestOS';
import Annotations from './Annotations/Annotations';
import BootOrder from './BootOrder/BootOrder';
import CPUMemory from './CPUMemory/CPUMemory';
import CreateAt from './CreateAt/CreateAt';
import Description from './Description/Description';
import HardwareDevices from './HadwareDevices/HardwareDevices';
import Hostname from './Hostname/Hostname';
import IP from './IP/IP';
import Labels from './Labels/Labels';
import Name from './Name/Name';
import Namespace from './Namespace/Namespace';
import Node from './Node/Node';
import OperatingSystem from './OperatingSystem/OperatingSystem';
import Pods from './Pods/Pods';
import Timezone from './Timezone/Timezone';
import WorkloadProfile from './WorkloadProfile/WorkloadProfile';
var Details = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var pathname = _a.pathname, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _t = useGuestOS(vmi), guestAgentData = _t[0], loadedGuestAgent = _t[1];
    var vm = useK8sWatchResource({
        groupVersionKind: VirtualMachineModelGroupVersionKind,
        name: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.name,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
    })[0];
    var _u = useSSHService(vm), sshService = _u[0], sshServiceLoaded = _u[1];
    return (React.createElement("div", null,
        React.createElement("a", { className: "link-icon", href: "".concat(pathname, "#details") },
            React.createElement(Icon, { size: "sm" },
                React.createElement(LinkIcon, null))),
        React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('VirtualMachineInstance Details')),
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, { span: 5 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(Name, { name: (_d = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _d === void 0 ? void 0 : _d.name }),
                    React.createElement(Namespace, { namespace: (_e = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _e === void 0 ? void 0 : _e.namespace }),
                    React.createElement(Labels, { vmi: vmi }),
                    React.createElement(Annotations, { vmi: vmi }),
                    React.createElement(Description, { vmi: vmi }),
                    React.createElement(OperatingSystem, { guestAgentData: guestAgentData, loadedGuestAgent: loadedGuestAgent, vmi: vmi }),
                    React.createElement(CPUMemory, { vmi: vmi }),
                    React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('The machine type defines the virtual hardware configuration while the operating system name and version refer to the hypervisor.'), descriptionData: getMachineType(vm) || NO_DATA_DASH, descriptionHeader: t('Machine type'), isPopover: true }),
                    React.createElement(CreateAt, { timestamp: (_f = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _f === void 0 ? void 0 : _f.creationTimestamp }),
                    React.createElement(OwnerDetailsItem, { obj: vmi }))),
            React.createElement(GridItem, { span: 1 }),
            React.createElement(GridItem, { span: 5 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(VirtualMachinesInstancesStatus, { status: (_g = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _g === void 0 ? void 0 : _g.phase }), descriptionHeader: t('Status') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Pods, { vmi: vmi }), descriptionHeader: t('Pod') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(BootOrder, { disks: (_k = (_j = (_h = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _h === void 0 ? void 0 : _h.domain) === null || _j === void 0 ? void 0 : _j.devices) === null || _k === void 0 ? void 0 : _k.disks, interfaces: (_o = (_m = (_l = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _l === void 0 ? void 0 : _l.domain) === null || _m === void 0 ? void 0 : _m.devices) === null || _o === void 0 ? void 0 : _o.interfaces }), descriptionHeader: t('Boot order') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(IP, { vmi: vmi }), descriptionHeader: t('IP address') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Hostname, { guestAgentData: guestAgentData }), descriptionHeader: 'Hostname' }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Timezone, { guestAgentData: guestAgentData }), descriptionHeader: t('Time zone') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Node, { nodeName: (_p = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _p === void 0 ? void 0 : _p.nodeName }), descriptionHeader: t('Node') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(WorkloadProfile, { annotations: (_q = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _q === void 0 ? void 0 : _q.annotations }), descriptionHeader: t('Workload profile') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(SSHAccess, { sshService: sshService, sshServiceLoaded: sshServiceLoaded, vm: vm, vmi: vmi }), descriptionHeader: t('SSH access') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(HardwareDevices, { devices: (_s = (_r = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _r === void 0 ? void 0 : _r.domain) === null || _s === void 0 ? void 0 : _s.devices }), descriptionHeader: t('Hardware devices') }))))));
};
export default Details;
//# sourceMappingURL=Details.js.map