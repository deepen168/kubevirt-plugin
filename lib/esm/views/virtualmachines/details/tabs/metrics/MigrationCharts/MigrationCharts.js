import React from 'react';
import MigrationThresholdChart from '@kubevirt-utils/components/Charts/MigrationUtil/MigrationThresholdChart';
import MigrationThresholdChartDiskRate from '@kubevirt-utils/components/Charts/MigrationUtil/MigrationThresholdChartDiskRate';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, CardBody, CardTitle, Grid, GridItem, Stack, StackItem, } from '@patternfly/react-core';
import MigrationProgressStatus from './MigrationProgressStatus';
var MigrationCharts = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Stack, null,
        React.createElement(StackItem, null,
            React.createElement(Grid, null,
                React.createElement(GridItem, { span: 6 },
                    React.createElement(Card, null,
                        React.createElement(CardTitle, null, t('Migration chart')),
                        React.createElement(CardBody, null,
                            React.createElement(MigrationThresholdChart, { vmi: vmi })))),
                React.createElement(GridItem, { span: 6 },
                    React.createElement(Card, null,
                        React.createElement(CardTitle, null, t('KV data transfer rate')),
                        React.createElement(CardBody, null,
                            React.createElement(MigrationThresholdChartDiskRate, { vmi: vmi })))))),
        React.createElement(MigrationProgressStatus, { vmi: vmi })));
};
export default MigrationCharts;
//# sourceMappingURL=MigrationCharts.js.map