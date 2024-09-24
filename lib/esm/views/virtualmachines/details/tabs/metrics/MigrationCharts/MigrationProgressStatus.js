import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useMigrationPercentage from '@kubevirt-utils/resources/vm/hooks/useMigrationPercentage';
import { Timestamp } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, CardTitle, Progress, ProgressMeasureLocation, Stack, StackItem, } from '@patternfly/react-core';
import { getMigrationProgressVariant } from '../utils/utils';
var MigrationProgressStatus = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useMigrationPercentage(vmi), endTimestamp = _b.endTimestamp, isFailed = _b.isFailed, percentage = _b.percentage;
    var progressStatus = getMigrationProgressVariant(percentage, isFailed);
    return (React.createElement(StackItem, null,
        React.createElement(Card, null,
            React.createElement(CardTitle, null, t('LiveMigration progress')),
            React.createElement(CardBody, null,
                React.createElement(Stack, { hasGutter: true },
                    React.createElement(StackItem, null, endTimestamp && (React.createElement(React.Fragment, null,
                        t('Complete time:'),
                        ' ',
                        React.createElement(Timestamp, { className: "virtual-machine-metrics-tab__migration-completed-timestamp", simple: true, timestamp: endTimestamp })))),
                    React.createElement(StackItem, null,
                        React.createElement(Progress, { measureLocation: ProgressMeasureLocation.top, value: percentage, variant: progressStatus })))))));
};
export default MigrationProgressStatus;
//# sourceMappingURL=MigrationProgressStatus.js.map