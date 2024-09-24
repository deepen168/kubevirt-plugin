import React from 'react';
import CPUThresholdChart from '@kubevirt-utils/components/Charts/CPUUtil/CPUThresholdChart';
import MemoryThresholdChart from '@kubevirt-utils/components/Charts/MemoryUtil/MemoryThresholdChart';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, CardBody, CardTitle, Grid, GridItem } from '@patternfly/react-core';
var UtilizationCharts = function (_a) {
    var pods = _a.pods, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Grid, null,
        React.createElement(GridItem, { span: 6 },
            React.createElement(Card, null,
                React.createElement(CardTitle, null, t('Memory')),
                React.createElement(CardBody, null,
                    React.createElement(MemoryThresholdChart, { vmi: vmi })))),
        React.createElement(GridItem, { span: 6 },
            React.createElement(Card, null,
                React.createElement(CardTitle, null, t('CPU')),
                React.createElement(CardBody, null,
                    React.createElement(CPUThresholdChart, { pods: pods, vmi: vmi }))))));
};
export default UtilizationCharts;
//# sourceMappingURL=UtilizationCharts.js.map