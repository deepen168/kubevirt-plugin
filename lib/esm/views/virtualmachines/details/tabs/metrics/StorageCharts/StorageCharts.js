import React from 'react';
import StorageIOPSTotalThresholdChart from '@kubevirt-utils/components/Charts/StorageUtil/StorageIOPSTotalThresholdChart';
import StorageTotalReadWriteThresholdChart from '@kubevirt-utils/components/Charts/StorageUtil/StorageTotalReadWriteThresholdChart';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, CardBody, CardTitle, Grid, GridItem } from '@patternfly/react-core';
var StorageCharts = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Grid, null,
        React.createElement(GridItem, { span: 6 },
            React.createElement(Card, null,
                React.createElement(CardTitle, null, t('Storage total read / write')),
                React.createElement(CardBody, null,
                    React.createElement(StorageTotalReadWriteThresholdChart, { vmi: vmi })))),
        React.createElement(GridItem, { span: 6 },
            React.createElement(Card, null,
                React.createElement(CardTitle, null, t('Storage IOPS total read / write')),
                React.createElement(CardBody, null,
                    React.createElement(StorageIOPSTotalThresholdChart, { vmi: vmi }))))));
};
export default StorageCharts;
//# sourceMappingURL=StorageCharts.js.map