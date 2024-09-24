import React from 'react';
import NodeSelectorDetailItem from '@kubevirt-utils/components/NodeSelectorDetailItem/NodeSelectorDetailItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DescriptionList, Grid, GridItem, PageSection, PageSectionVariants, } from '@patternfly/react-core';
import Affinity from './Affinity/Affinity';
import Descheduler from './Descheduler/Descheduler';
import DedicatedResources from './DeticatedResources/DedicatedResources';
import EvictionStrategy from './EvictionStrategy/EvictionStrategy';
import Tolerations from './Tolerations/Tolerations';
var VirtualMachinesInstancePageSchedulingTab = function (_a) {
    var _b;
    var vmi = _a.obj;
    var t = useKubevirtTranslation().t;
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, { span: 6 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(NodeSelectorDetailItem, { nodeSelector: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _b === void 0 ? void 0 : _b.nodeSelector }), descriptionHeader: t('Node selector') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Tolerations, { vmi: vmi }), descriptionHeader: t('Tolerations') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Affinity, { vmi: vmi }), descriptionHeader: t('Affinity rules') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Descheduler, { vmi: vmi }), descriptionHeader: t('Descheduler') }))),
            React.createElement(GridItem, { span: 6 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(DedicatedResources, { vmi: vmi }), descriptionHeader: t('Dedicated resources') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(EvictionStrategy, { vmi: vmi }), descriptionHeader: t('Eviction strategy') }))))));
};
export default VirtualMachinesInstancePageSchedulingTab;
//# sourceMappingURL=VirtualMachinesInstancePageSchedulingTab.js.map