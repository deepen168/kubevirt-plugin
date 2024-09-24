import React from 'react';
import { Overview } from '@openshift-console/dynamic-plugin-sdk';
import { Grid, GridItem } from '@patternfly/react-core';
import OverviewAlertsCard from './alerts-card/OverviewAlertsCard';
import GettingStartedCard from './getting-started-card/GettingStartedCard';
import ChartsCard from './metric-charts-card/components/ChartsCard';
import VMStatusesCard from './vm-statuses-card/VMStatusesCard';
import VMsPerResourceCard from './vms-per-resource-card/VMsPerResourceCard';
var OverviewTab = function () {
    return (React.createElement(Overview, null,
        React.createElement(GettingStartedCard, null),
        React.createElement(ChartsCard, null),
        React.createElement(OverviewAlertsCard, null),
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, { span: 6 },
                React.createElement(VMStatusesCard, null)),
            React.createElement(GridItem, { span: 6 },
                React.createElement(VMsPerResourceCard, null)))));
};
export default OverviewTab;
//# sourceMappingURL=OverviewTab.js.map