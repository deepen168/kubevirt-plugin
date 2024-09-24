import * as React from 'react';
import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VM_STATUS } from '@kubevirt-utils/resources/vm/utils/vmStatus';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Accordion, AccordionContent, AccordionItem, AccordionToggle, Card, CardHeader, CardTitle, Divider, Grid, Label, } from '@patternfly/react-core';
import { ERROR } from './utils/constants';
import { getVMStatuses } from './utils/utils';
import VMStatusItem from './VMStatusItem';
import './VMStatusesCard.scss';
var VMStatusesCard = function () {
    var _a;
    var activeNamespace = useActiveNamespace()[0];
    var namespace = React.useMemo(function () { return (activeNamespace === ALL_NAMESPACES_SESSION_KEY ? null : activeNamespace); }, [activeNamespace]);
    var t = useKubevirtTranslation().t;
    var vms = useK8sWatchResource({
        groupVersionKind: VirtualMachineModelGroupVersionKind,
        isList: true,
        namespace: namespace,
        namespaced: Boolean(namespace),
    })[0];
    var _b = React.useState(false), showExtraStatuses = _b[0], setShowExtraStatuses = _b[1];
    var _c = getVMStatuses(vms || []), additionalStatuses = _c.additionalStatuses, primaryStatuses = _c.primaryStatuses;
    return (React.createElement(Card, { className: "vm-statuses-card", "data-test-id": "vm-statuses-card" },
        React.createElement(CardHeader, { className: "vm-statuses-card__header" },
            React.createElement(CardTitle, null, t('VirtualMachine statuses'))),
        React.createElement("div", { className: "vm-statuses-card__body" },
            React.createElement(Grid, { hasGutter: true },
                React.createElement(VMStatusItem, { count: primaryStatuses.Error, namespace: activeNamespace, status: ERROR }),
                React.createElement(VMStatusItem, { count: primaryStatuses.Running, namespace: activeNamespace, status: VM_STATUS.Running }),
                React.createElement(VMStatusItem, { count: primaryStatuses.Paused, namespace: activeNamespace, status: VM_STATUS.Paused }),
                React.createElement(VMStatusItem, { count: primaryStatuses.Migrating, namespace: activeNamespace, status: VM_STATUS.Migrating }))),
        React.createElement(Divider, null),
        React.createElement("div", { className: "vm-statuses-card__accordion" },
            React.createElement(Accordion, null,
                React.createElement(AccordionItem, null,
                    React.createElement(AccordionToggle, { className: "vm-statuses-card__accordion-toggle", id: "status-accordion-toggle", isExpanded: showExtraStatuses, onClick: function () { return setShowExtraStatuses(!showExtraStatuses); } },
                        React.createElement("span", { className: "vm-statuses-card__accordion-toggle--text" }, t('Additional statuses')),
                        React.createElement(Label, { className: "vm-statuses-card__accordion-toggle--label", isCompact: true, key: "vm-status-accordion-toggle-label" }, Object.keys(additionalStatuses).length)),
                    React.createElement(Divider, null),
                    React.createElement(AccordionContent, { className: "vm-statuses-card__accordion-content", id: "status-accordion-content", isHidden: !showExtraStatuses },
                        React.createElement(Grid, { hasGutter: true }, (_a = Object.keys(additionalStatuses)) === null || _a === void 0 ? void 0 : _a.map(function (state) {
                            var count = additionalStatuses === null || additionalStatuses === void 0 ? void 0 : additionalStatuses[state];
                            return (React.createElement(VMStatusItem, { count: count, key: state, namespace: activeNamespace, status: state }));
                        }))))))));
};
export default VMStatusesCard;
//# sourceMappingURL=VMStatusesCard.js.map