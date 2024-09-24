import React from 'react';
import { JobModel, modelToGroupVersionKind, NamespaceModel, NetworkAttachmentDefinitionModelGroupVersionKind, NodeModel, } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Grid, GridItem, Title } from '@patternfly/react-core';
import CheckupsNetworkStatusIcon from '../../CheckupsNetworkStatusIcon';
import { STATUS_COMPILATION_TIME_STAMP, STATUS_FAILURE_REASON, STATUS_START_TIME_STAMP, } from '../../utils/utils';
import { STATUS_AVG_LATENCY_NANO, STATUS_MAX_LATENCY_NANO, STATUS_MIN_LATENCY_NANO, STATUS_NAD_NAME, STATUS_NAD_NAMESPACE, STATUS_SAMPLE_DURATION, STATUS_SOURCE_NODE, STATUS_TARGET_NODE, } from '../utils/utils';
var CheckupsNetworkDetailsPageSection = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    var configMap = _a.configMap, job = _a.job;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('Latency checkup details')),
        React.createElement(Grid, null,
            React.createElement(GridItem, { span: 6 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: (_b = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _b === void 0 ? void 0 : _b.name, descriptionHeader: t('Name') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(CheckupsNetworkStatusIcon, { configMap: configMap, job: job }), descriptionHeader: t('Status') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NamespaceModel), name: (_c = configMap === null || configMap === void 0 ? void 0 : configMap.metadata) === null || _c === void 0 ? void 0 : _c.namespace }), descriptionHeader: t('Namespace') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_d = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _d === void 0 ? void 0 : _d[STATUS_AVG_LATENCY_NANO])
                            ? t('{{time}} Nanoseconds', {
                                time: (_e = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _e === void 0 ? void 0 : _e[STATUS_AVG_LATENCY_NANO],
                            })
                            : NO_DATA_DASH, descriptionHeader: t('Average latency') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_f = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _f === void 0 ? void 0 : _f[STATUS_MAX_LATENCY_NANO])
                            ? t('{{time}} Nanoseconds', {
                                time: (_g = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _g === void 0 ? void 0 : _g[STATUS_MIN_LATENCY_NANO],
                            })
                            : NO_DATA_DASH, descriptionHeader: t('Maximum latency') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_h = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _h === void 0 ? void 0 : _h[STATUS_START_TIME_STAMP]) || NO_DATA_DASH, descriptionHeader: t('Start time') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_j = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _j === void 0 ? void 0 : _j[STATUS_COMPILATION_TIME_STAMP]) || NO_DATA_DASH, descriptionHeader: t('Complete time') }))),
            React.createElement(GridItem, { span: 6 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(ResourceLink, { groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind, name: (_k = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _k === void 0 ? void 0 : _k[STATUS_NAD_NAME], namespace: (_l = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _l === void 0 ? void 0 : _l[STATUS_NAD_NAMESPACE] }), descriptionHeader: t('NetworkAttachmentDefinition') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_m = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _m === void 0 ? void 0 : _m[STATUS_FAILURE_REASON]) || t('None'), descriptionHeader: t('Failure reason') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: t('{{time}} seconds', {
                            time: (_o = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _o === void 0 ? void 0 : _o[STATUS_SAMPLE_DURATION],
                        }), descriptionHeader: t('Measurement duration') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_p = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _p === void 0 ? void 0 : _p[STATUS_MIN_LATENCY_NANO])
                            ? t('{{time}} Nanoseconds', {
                                time: (_q = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _q === void 0 ? void 0 : _q[STATUS_MIN_LATENCY_NANO],
                            })
                            : NO_DATA_DASH, descriptionHeader: t('Minimum latency') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_r = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _r === void 0 ? void 0 : _r[STATUS_SOURCE_NODE]) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NodeModel), name: (_s = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _s === void 0 ? void 0 : _s[STATUS_SOURCE_NODE] })) : (NO_DATA_DASH), descriptionHeader: t('Source node') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: ((_t = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _t === void 0 ? void 0 : _t[STATUS_TARGET_NODE]) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(NodeModel), name: (_u = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _u === void 0 ? void 0 : _u[STATUS_TARGET_NODE] })) : (NO_DATA_DASH), descriptionHeader: t('Target node') }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(JobModel), name: (_v = job === null || job === void 0 ? void 0 : job.metadata) === null || _v === void 0 ? void 0 : _v.name, namespace: (_w = job === null || job === void 0 ? void 0 : job.metadata) === null || _w === void 0 ? void 0 : _w.namespace }), descriptionHeader: t('Job') }))))));
};
export default CheckupsNetworkDetailsPageSection;
//# sourceMappingURL=CheckupsNetworkDetailsPageSection.js.map