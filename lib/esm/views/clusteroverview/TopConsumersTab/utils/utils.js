import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { humanizeBinaryBytes, humanizeDecimalBytes, humanizeSeconds, } from '../../../../utils/utils/humanize';
import { STORAGE_IOPS_UNIT } from './constants';
import { TopConsumerMetric } from './topConsumerMetric';
import { TopConsumerScope } from './topConsumerScope';
export var getValue = function (value) { return parseFloat(value); };
export var humanizeTopConsumerMetric = function (value, metric) {
    var humanizedValue;
    switch (metric) {
        case TopConsumerMetric.CPU:
            humanizedValue = humanizeSeconds(value, 's', 'ms');
            break;
        case TopConsumerMetric.MEMORY:
            humanizedValue = humanizeBinaryBytes(value, 'B', 'GiB');
            break;
        case TopConsumerMetric.MEMORY_SWAP_TRAFFIC:
            humanizedValue = humanizeDecimalBytes(value, 'MB');
            break;
        case TopConsumerMetric.VCPU_WAIT:
            humanizedValue = humanizeSeconds(value, 's', 'ms');
            break;
        case TopConsumerMetric.STORAGE_THROUGHPUT:
            humanizedValue = humanizeDecimalBytes(value);
            break;
        case TopConsumerMetric.STORAGE_IOPS:
            humanizedValue = { unit: STORAGE_IOPS_UNIT, value: value.toFixed(2) };
            break;
        default:
            humanizedValue = { unit: '', value: value };
    }
    return { unit: humanizedValue.unit, value: humanizedValue.value };
};
export var getHumanizedValue = function (value, metric) {
    var rawValue = getValue(value);
    return humanizeTopConsumerMetric(rawValue, metric);
};
export var getTopConsumerCardID = function (rowNumber, cardNumber) {
    return "topConsumerCard-".concat(rowNumber, "-").concat(cardNumber);
};
export var TOP_AMOUNT_SELECT_OPTIONS = [
    {
        key: 'top-5',
        value: t('Show top 5'),
    },
    {
        key: 'top-10',
        value: t('Show top 10'),
    },
];
export var initialTopConsumerCardSettings = {
    'topConsumerCard-1-1': {
        metric: TopConsumerMetric.CPU,
        scope: TopConsumerScope.VM,
    },
    'topConsumerCard-1-2': {
        metric: TopConsumerMetric.MEMORY,
        scope: TopConsumerScope.VM,
    },
    'topConsumerCard-1-3': {
        metric: TopConsumerMetric.MEMORY_SWAP_TRAFFIC,
        scope: TopConsumerScope.VM,
    },
    'topConsumerCard-2-1': {
        metric: TopConsumerMetric.VCPU_WAIT,
        scope: TopConsumerScope.VM,
    },
    'topConsumerCard-2-2': {
        metric: TopConsumerMetric.STORAGE_THROUGHPUT,
        scope: TopConsumerScope.VM,
    },
    'topConsumerCard-2-3': {
        metric: TopConsumerMetric.STORAGE_IOPS,
        scope: TopConsumerScope.VM,
    },
};
export var getChartTitle = function (scope, queryData) {
    var title = '';
    var metricData = queryData === null || queryData === void 0 ? void 0 : queryData.metric;
    switch (scope) {
        case TopConsumerScope.NODE:
            title = metricData === null || metricData === void 0 ? void 0 : metricData.node;
            break;
        case TopConsumerScope.PROJECT:
            title = metricData === null || metricData === void 0 ? void 0 : metricData.namespace;
            break;
        case TopConsumerScope.VM:
        default:
            title =
                (metricData === null || metricData === void 0 ? void 0 : metricData.name) || (metricData === null || metricData === void 0 ? void 0 : metricData.label_vm_kubevirt_io_name) || "VMI (".concat(metricData === null || metricData === void 0 ? void 0 : metricData.pod, ")");
            break;
    }
    return title;
};
//# sourceMappingURL=utils.js.map