import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES } from '@kubevirt-utils/hooks/constants';
import { getInstanceTypePrefix } from '@kubevirt-utils/resources/bootableresources/helpers';
import { isAllNamespaces } from '@kubevirt-utils/utils/utils';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { getInstanceTypeSeriesLabel } from './utils/utils';
import './RunningVMsChartLegendLabel.scss';
var RunningVMsChartLegendLabel = function (_a) {
    var item = _a.item;
    var activeNamespace = useActiveNamespace()[0];
    var namespace = isAllNamespaces(activeNamespace) ? ALL_NAMESPACES : "ns/".concat(activeNamespace);
    var iconStyle = { color: item.color };
    var filterKey = item.isInstanceType ? 'instanceType' : 'template';
    var linkPath = "/k8s/".concat(namespace, "/").concat(VirtualMachineModelRef, "?rowFilter-").concat(filterKey, "=").concat(getInstanceTypePrefix(item.name));
    return (React.createElement(React.Fragment, null,
        React.createElement("i", { className: "fas fa-square kv-running-vms-card__legend-label--color", style: iconStyle }),
        React.createElement("span", { className: "kv-running-vms-card__legend-label--count" }, item.vmCount),
        ' ',
        React.createElement(Link, { to: linkPath }, getInstanceTypeSeriesLabel(item.name))));
};
export default RunningVMsChartLegendLabel;
//# sourceMappingURL=RunningVMsChartLegendLabel.js.map