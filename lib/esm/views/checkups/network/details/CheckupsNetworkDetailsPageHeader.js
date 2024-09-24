import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Breadcrumb, BreadcrumbItem, Button, ButtonVariant, Flex, FlexItem, Title, } from '@patternfly/react-core';
import CheckupsNetworkActions from '../components/CheckupsNetworkActions';
var CheckupsNetworkDetailsPageHeader = function (_a) {
    var _b;
    var configMap = _a.configMap, jobs = _a.jobs;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var namespace = useActiveNamespace()[0];
    return (React.createElement(React.Fragment, null,
        React.createElement(Breadcrumb, { className: "pf-c-breadcrumb co-breadcrumb" },
            React.createElement(BreadcrumbItem, null,
                React.createElement(Button, { isInline: true, onClick: function () { return navigate("/k8s/ns/".concat(namespace, "/checkups")); }, variant: ButtonVariant.link }, t('Network latency checkup'))),
            React.createElement(BreadcrumbItem, null, t('Latency checkup details'))),
        React.createElement(Flex, { justifyContent: { default: 'justifyContentSpaceBetween' } },
            React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, (_b = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _b === void 0 ? void 0 : _b.name),
            React.createElement(FlexItem, null,
                React.createElement(CheckupsNetworkActions, { configMap: configMap, jobs: jobs })))));
};
export default CheckupsNetworkDetailsPageHeader;
//# sourceMappingURL=CheckupsNetworkDetailsPageHeader.js.map