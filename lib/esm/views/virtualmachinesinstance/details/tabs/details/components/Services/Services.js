import * as React from 'react';
import { modelToGroupVersionKind, ServiceModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getServicesForVmi } from '@kubevirt-utils/resources/vmi';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { ServicesList } from '@openshift-console/dynamic-plugin-sdk-internal';
import { Icon, Title } from '@patternfly/react-core';
import { LinkIcon } from '@patternfly/react-icons';
var Services = function (_a) {
    var _b;
    var pathname = _a.pathname, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ServiceModel),
        isList: true,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
    }), services = _c[0], loaded = _c[1];
    var data = getServicesForVmi(services, vmi);
    return (React.createElement("div", null,
        React.createElement("a", { className: "link-icon", href: "".concat(pathname, "#services") },
            React.createElement(Icon, { size: "sm" },
                React.createElement(LinkIcon, null))),
        React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('Services')),
        React.createElement(ServicesList, { data: data || [], loaded: loaded })));
};
export default Services;
//# sourceMappingURL=Services.js.map