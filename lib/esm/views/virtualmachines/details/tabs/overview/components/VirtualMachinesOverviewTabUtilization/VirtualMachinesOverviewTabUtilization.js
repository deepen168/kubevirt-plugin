import React from 'react';
import { Trans } from 'react-i18next';
import ComponentReady from '@kubevirt-utils/components/Charts/ComponentReady/ComponentReady';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, CardBody, CardTitle, DescriptionListTermHelpText, DescriptionListTermHelpTextButton, Divider, Grid, GridItem, Popover, PopoverPosition, } from '@patternfly/react-core';
import { isRunning } from '@virtualmachines/utils';
import CPUUtil from './components/CPUUtil/CPUUtil';
import MemoryUtil from './components/MemoryUtil/MemoryUtil';
import NetworkUtil from './components/NetworkUtil/NetworkUtil';
import StorageUtil from './components/StorageUtil/StorageUtil';
import UtilizationThresholdCharts from './components/UtilizationThresholdCharts';
import './virtual-machines-overview-tab-utilization.scss';
var VirtualMachinesOverviewTabUtilization = function (_a) {
    var pods = _a.pods, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Card, { className: "VirtualMachinesOverviewTabUtilization--main" },
        React.createElement("div", { className: "title" },
            React.createElement(CardTitle, { className: "text-muted" },
                React.createElement(DescriptionListTermHelpText, null,
                    React.createElement(Popover, { bodyContent: React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                            React.createElement("div", null, "Donuts chart represent current values."),
                            React.createElement("div", null, "Sparkline charts represent data over time")), position: PopoverPosition === null || PopoverPosition === void 0 ? void 0 : PopoverPosition.right },
                        React.createElement(DescriptionListTermHelpTextButton, null, t('Utilization')))))),
        React.createElement(Divider, null),
        React.createElement(CardBody, { isFilled: true },
            React.createElement(ComponentReady, { isReady: isRunning(vm), text: t('VirtualMachine is not running') },
                React.createElement(Grid, null,
                    React.createElement(GridItem, { span: 3 },
                        React.createElement(CPUUtil, { pods: pods, vmi: vmi })),
                    React.createElement(GridItem, { span: 3 },
                        React.createElement(MemoryUtil, { vmi: vmi })),
                    React.createElement(GridItem, { span: 3 },
                        React.createElement(StorageUtil, { vmi: vmi })),
                    React.createElement(GridItem, { span: 3 },
                        React.createElement(NetworkUtil, { vmi: vmi })),
                    React.createElement(UtilizationThresholdCharts, { pods: pods, vmi: vmi }))))));
};
export default VirtualMachinesOverviewTabUtilization;
//# sourceMappingURL=VirtualMachinesOverviewTabUtilization.js.map