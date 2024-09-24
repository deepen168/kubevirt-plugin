import React, { useMemo } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import xbytes from 'xbytes';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import ComponentReady from '@kubevirt-utils/components/Charts/ComponentReady/ComponentReady';
import { getUtilizationQueries } from '@kubevirt-utils/components/Charts/utils/queries';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Popover, Text, TextVariants } from '@patternfly/react-core';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
var NetworkUtil = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _t = useDuration(), currentTime = _t.currentTime, duration = _t.duration;
    var queries = React.useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var interfacesNames = useMemo(function () { var _a, _b, _c; return (_c = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices) === null || _c === void 0 ? void 0 : _c.interfaces; }, [vmi]);
    var networkIn = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_USAGE,
    })[0];
    var networkTotal = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        endTime: currentTime,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_TOTAL_BY_INTERFACE_USAGE,
    })[0];
    var networkOut = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        endTime: currentTime,
        namespace: (_d = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _d === void 0 ? void 0 : _d.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_USAGE,
    })[0];
    var networkInterfaceTotal = (_j = Number((_h = (_g = (_f = (_e = networkTotal === null || networkTotal === void 0 ? void 0 : networkTotal.data) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h[1])) === null || _j === void 0 ? void 0 : _j.toFixed(2);
    var networkInData = +((_o = (_m = (_l = (_k = networkIn === null || networkIn === void 0 ? void 0 : networkIn.data) === null || _k === void 0 ? void 0 : _k.result) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.value) === null || _o === void 0 ? void 0 : _o[1]);
    var networkOutData = +((_s = (_r = (_q = (_p = networkOut === null || networkOut === void 0 ? void 0 : networkOut.data) === null || _p === void 0 ? void 0 : _p.result) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.value) === null || _s === void 0 ? void 0 : _s[1]);
    var totalTransferred = xbytes(networkInData + networkOutData || 0, {
        fixed: 0,
        iec: true,
    });
    var isReady = !isEmpty(networkInData) || !isEmpty(networkOutData);
    return (React.createElement("div", { className: "util network" },
        React.createElement("div", { className: "util-upper" },
            React.createElement("div", { className: "util-title" },
                t('Network transfer'),
                React.createElement(Popover, { bodyContent: React.createElement("div", null,
                        React.createElement(Text, { component: TextVariants.h3 }, t('Network transfer breakdown')),
                        React.createElement(Text, { component: TextVariants.h6 }, t('Top consumer')), interfacesNames === null || interfacesNames === void 0 ? void 0 :
                        interfacesNames.map(function (networkInterface) {
                            var _a, _b;
                            return (React.createElement("div", { className: "network-popover", key: networkInterface === null || networkInterface === void 0 ? void 0 : networkInterface.name },
                                React.createElement(Link, { to: "".concat(getResourceUrl({
                                        model: VirtualMachineModel,
                                        resource: vmi,
                                    }), "/metrics?network=").concat(networkInterface === null || networkInterface === void 0 ? void 0 : networkInterface.name) }, networkInterface === null || networkInterface === void 0 ? void 0 : networkInterface.name),
                                (networkInterface === null || networkInterface === void 0 ? void 0 : networkInterface.name) === networkInterfaceTotal ? (React.createElement("div", { className: "text-muted" }, "".concat(networkInterfaceTotal, " MBps"))) : (React.createElement("div", { className: "text-muted" }, (_b = (_a = networkTotal === null || networkTotal === void 0 ? void 0 : networkTotal.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.map(function (name) {
                                    var _a, _b, _c;
                                    return ((_a = name === null || name === void 0 ? void 0 : name.metric) === null || _a === void 0 ? void 0 : _a.interface) === (networkInterface === null || networkInterface === void 0 ? void 0 : networkInterface.name) &&
                                        "".concat((_c = Number((_b = name === null || name === void 0 ? void 0 : name.value) === null || _b === void 0 ? void 0 : _b[1])) === null || _c === void 0 ? void 0 : _c.toFixed(2), " MBps");
                                })))));
                        }),
                        (interfacesNames === null || interfacesNames === void 0 ? void 0 : interfacesNames.length) > 5 && (React.createElement(Link, { to: "".concat(getResourceUrl({
                                model: VirtualMachineModel,
                                resource: vmi,
                            }), "/metrics?network") }, t('View more')))), position: "bottom" },
                    React.createElement("div", null,
                        React.createElement(Button, { isInline: true, variant: ButtonVariant.link }, t('Breakdown by network'))))),
            React.createElement("div", { className: "util-summary", "data-test-id": "util-summary-network-transfer" },
                React.createElement("div", { className: "util-summary-value" }, "".concat(totalTransferred, "ps")),
                React.createElement("div", { className: "util-summary-text text-muted network-value" },
                    React.createElement("div", null, t('Total'))))),
        React.createElement(ComponentReady, { isReady: isReady },
            React.createElement("div", { className: "network-metrics" },
                React.createElement("div", { className: "network-metrics--row text-muted" },
                    React.createElement("div", { className: "network-metrics--row__sum" }, "".concat(xbytes(networkInData || 0, {
                        fixed: 0,
                    }), "s")),
                    React.createElement("div", { className: "network-metrics--row__title" }, t('In'))),
                React.createElement("div", { className: "network-metrics--row text-muted" },
                    React.createElement("div", { className: "network-metrics--row__sum" }, "".concat(xbytes(networkOutData || 0, {
                        fixed: 0,
                    }), "s")),
                    React.createElement("div", { className: "network-metrics--row__title" }, t('Out')))))));
};
export default NetworkUtil;
//# sourceMappingURL=NetworkUtil.js.map