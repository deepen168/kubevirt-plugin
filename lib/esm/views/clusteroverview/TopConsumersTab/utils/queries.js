var _a, _b, _c, _d;
import { TopConsumerMetric as Metric } from './topConsumerMetric';
import { TopConsumerScope as Scope } from './topConsumerScope';
var topConsumerQueries = (_a = {},
    _a[Scope.NODE.getValue()] = (_b = {},
        _b[Metric.CPU.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_cpu_usage_seconds_total[").concat(duration, "])) by (node))) > 0");
        },
        _b[Metric.MEMORY_SWAP_TRAFFIC.getValue()] = function (numItemsToShow) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(kubevirt_vmi_memory_swap_in_traffic_bytes + kubevirt_vmi_memory_swap_out_traffic_bytes) by (node))) > 0");
        },
        _b[Metric.MEMORY.getValue()] = function (numItemsToShow) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(kubevirt_vmi_memory_available_bytes-kubevirt_vmi_memory_usable_bytes) by(node))) > 0");
        },
        _b[Metric.STORAGE_IOPS.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_storage_iops_read_total[").concat(duration, "]) + rate(kubevirt_vmi_storage_iops_write_total[").concat(duration, "])) by (node))) > 0");
        },
        _b[Metric.STORAGE_THROUGHPUT.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_storage_read_traffic_bytes_total[").concat(duration, "]) + rate(kubevirt_vmi_storage_write_traffic_bytes_total[").concat(duration, "])) by (node))) > 0");
        },
        _b[Metric.VCPU_WAIT.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_vcpu_wait_seconds_total[").concat(duration, "])) by (node))) > 0");
        },
        _b),
    _a[Scope.PROJECT.getValue()] = (_c = {},
        _c[Metric.CPU.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_cpu_usage_seconds_total[").concat(duration, "])) by (namespace))) > 0");
        },
        _c[Metric.MEMORY_SWAP_TRAFFIC.getValue()] = function (numItemsToShow) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(kubevirt_vmi_memory_swap_in_traffic_bytes + kubevirt_vmi_memory_swap_out_traffic_bytes) by (namespace))) > 0");
        },
        _c[Metric.MEMORY.getValue()] = function (numItemsToShow) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(kubevirt_vmi_memory_available_bytes-kubevirt_vmi_memory_usable_bytes) by (namespace))) > 0");
        },
        _c[Metric.STORAGE_IOPS.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_storage_iops_read_total[").concat(duration, "]) + rate(kubevirt_vmi_storage_iops_write_total[").concat(duration, "])) by (namespace))) > 0");
        },
        _c[Metric.STORAGE_THROUGHPUT.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_storage_read_traffic_bytes_total[").concat(duration, "]) + rate(kubevirt_vmi_storage_write_traffic_bytes_total[").concat(duration, "])) by (namespace))) > 0");
        },
        _c[Metric.VCPU_WAIT.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_vcpu_wait_seconds_total[").concat(duration, "])) by (namespace))) > 0");
        },
        _c),
    _a[Scope.VM.getValue()] = (_d = {},
        _d[Metric.CPU.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_cpu_usage_seconds_total[").concat(duration, "])) BY (name, namespace)))");
        },
        _d[Metric.MEMORY_SWAP_TRAFFIC.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk (".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_memory_swap_in_traffic_bytes[").concat(duration, "]) + rate(kubevirt_vmi_memory_swap_out_traffic_bytes[").concat(duration, "]))by(name, namespace))) > 0");
        },
        _d[Metric.MEMORY.getValue()] = function (numItemsToShow) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(kubevirt_vmi_memory_available_bytes-kubevirt_vmi_memory_usable_bytes) by(name, namespace))) > 0");
        },
        _d[Metric.STORAGE_IOPS.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_storage_iops_read_total[").concat(duration, "]) + rate(kubevirt_vmi_storage_iops_write_total[").concat(duration, "])) by (namespace, name))) > 0");
        },
        _d[Metric.STORAGE_THROUGHPUT.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_storage_read_traffic_bytes_total[").concat(duration, "]) + rate(kubevirt_vmi_storage_write_traffic_bytes_total[").concat(duration, "])) by (namespace, name))) > 0");
        },
        _d[Metric.VCPU_WAIT.getValue()] = function (numItemsToShow, duration) {
            return "sort_desc(topk(".concat(numItemsToShow, ", sum(rate(kubevirt_vmi_vcpu_wait_seconds_total[").concat(duration, "])) by (namespace, name))) > 0");
        },
        _d),
    _a);
export var getTopConsumerQuery = function (metric, scope, numItemsToShow, duration) {
    var _a, _b;
    if (numItemsToShow === void 0) { numItemsToShow = 5; }
    if (duration === void 0) { duration = '5m'; }
    return (_b = (_a = topConsumerQueries === null || topConsumerQueries === void 0 ? void 0 : topConsumerQueries[scope]) === null || _a === void 0 ? void 0 : _a[metric]) === null || _b === void 0 ? void 0 : _b.call(_a, numItemsToShow, duration);
};
//# sourceMappingURL=queries.js.map