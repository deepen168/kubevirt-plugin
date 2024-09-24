import React from 'react';
import NetworkThresholdSingleSourceChart from '@kubevirt-utils/components/Charts/NetworkUtil/NetworkThresholdChartSingleSource';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, CardBody, CardTitle, Grid, GridItem } from '@patternfly/react-core';
import useNetworkData from './hook/useNetworkData';
var NetworkChartsByNIC = function (_a) {
    var nic = _a.nic, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useNetworkData(vmi, nic), data = _b.data, links = _b.links;
    return (React.createElement("div", null,
        React.createElement(Grid, null,
            React.createElement(GridItem, { span: 4 },
                React.createElement(Card, null,
                    React.createElement(CardTitle, null, t('Network in')),
                    React.createElement(CardBody, null,
                        React.createElement(NetworkThresholdSingleSourceChart, { data: data === null || data === void 0 ? void 0 : data.in, link: links === null || links === void 0 ? void 0 : links.in })))),
            React.createElement(GridItem, { span: 4 },
                React.createElement(Card, null,
                    React.createElement(CardTitle, null, t('Network out')),
                    React.createElement(CardBody, null,
                        React.createElement(NetworkThresholdSingleSourceChart, { data: data === null || data === void 0 ? void 0 : data.out, link: links === null || links === void 0 ? void 0 : links.out })))),
            React.createElement(GridItem, { span: 4 },
                React.createElement(Card, null,
                    React.createElement(CardTitle, null, t('Network bandwidth')),
                    React.createElement(CardBody, null,
                        React.createElement(NetworkThresholdSingleSourceChart, { data: data === null || data === void 0 ? void 0 : data.total, link: links === null || links === void 0 ? void 0 : links.total })))))));
};
export default NetworkChartsByNIC;
//# sourceMappingURL=NetworkChartsByNIC.js.map