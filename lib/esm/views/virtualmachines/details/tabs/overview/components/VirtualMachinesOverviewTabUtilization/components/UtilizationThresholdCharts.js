import React from 'react';
import CPUThresholdChart from '@kubevirt-utils/components/Charts/CPUUtil/CPUThresholdChart';
import MemoryThresholdChart from '@kubevirt-utils/components/Charts/MemoryUtil/MemoryThresholdChart';
import NetworkThresholdChart from '@kubevirt-utils/components/Charts/NetworkUtil/NetworkThresholdChart';
import StorageTotalReadWriteThresholdChart from '@kubevirt-utils/components/Charts/StorageUtil/StorageTotalReadWriteThresholdChart';
import { GridItem } from '@patternfly/react-core';
import TimeDropdown from './TimeDropdown';
var UtilizationThresholdCharts = function (_a) {
    var pods = _a.pods, vmi = _a.vmi;
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 12 },
            React.createElement(TimeDropdown, null)),
        React.createElement(GridItem, { span: 3 },
            React.createElement(CPUThresholdChart, { pods: pods, vmi: vmi })),
        React.createElement(GridItem, { span: 3 },
            React.createElement(MemoryThresholdChart, { vmi: vmi })),
        React.createElement(GridItem, { span: 3 },
            React.createElement(StorageTotalReadWriteThresholdChart, { vmi: vmi })),
        React.createElement(GridItem, { span: 3 },
            React.createElement(NetworkThresholdChart, { vmi: vmi }))));
};
export default UtilizationThresholdCharts;
//# sourceMappingURL=UtilizationThresholdCharts.js.map