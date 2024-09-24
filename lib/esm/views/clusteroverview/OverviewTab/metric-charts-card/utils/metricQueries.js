var _a, _b;
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { METRICS } from './constants';
var metricQueriesForNamespace = (_a = {},
    _a[METRICS.MEMORY] = function (namespace) {
        return "sum by (namespace)(kubevirt_vmi_memory_available_bytes{namespace=\"".concat(namespace, "\"} - kubevirt_vmi_memory_usable_bytes{namespace=\"").concat(namespace, "\"})");
    },
    _a[METRICS.STORAGE] = function (namespace) {
        return "sum by (namespace)(kubevirt_vmi_filesystem_used_bytes{namespace=\"".concat(namespace, "\"})");
    },
    _a[METRICS.VCPU_USAGE] = function (namespace) {
        return "count(kubevirt_vmi_vcpu_wait_seconds_total{namespace=\"".concat(namespace, "\"})");
    },
    _a[METRICS.VM] = function (namespace) {
        return "sum by (namespace)(count by (name,namespace)(kubevirt_vm_error_status_last_transition_timestamp_seconds{namespace=\"".concat(namespace, "\"} + kubevirt_vm_migrating_status_last_transition_timestamp_seconds{namespace=\"").concat(namespace, "\"} + kubevirt_vm_non_running_status_last_transition_timestamp_seconds{namespace=\"").concat(namespace, "\"} + kubevirt_vm_running_status_last_transition_timestamp_seconds{namespace=\"").concat(namespace, "\"} + kubevirt_vm_starting_status_last_transition_timestamp_seconds{namespace=\"").concat(namespace, "\"}))");
    },
    _a);
var metricQueriesForAllNamespaces = (_b = {},
    _b[METRICS.MEMORY] = function () {
        return "sum(kubevirt_vmi_memory_available_bytes - kubevirt_vmi_memory_usable_bytes)";
    },
    _b[METRICS.STORAGE] = function () { return "sum(kubevirt_vmi_filesystem_used_bytes)"; },
    _b[METRICS.VCPU_USAGE] = function () { return "count(kubevirt_vmi_vcpu_wait_seconds_total)"; },
    _b[METRICS.VM] = function () {
        return "sum(count by (name,namespace)(kubevirt_vm_error_status_last_transition_timestamp_seconds + kubevirt_vm_migrating_status_last_transition_timestamp_seconds + kubevirt_vm_non_running_status_last_transition_timestamp_seconds + kubevirt_vm_running_status_last_transition_timestamp_seconds + kubevirt_vm_starting_status_last_transition_timestamp_seconds))";
    },
    _b);
export var getMetricQuery = function (metric, namespace) {
    var _a;
    return namespace === ALL_NAMESPACES_SESSION_KEY
        ? metricQueriesForAllNamespaces[metric]()
        : (_a = metricQueriesForNamespace === null || metricQueriesForNamespace === void 0 ? void 0 : metricQueriesForNamespace[metric]) === null || _a === void 0 ? void 0 : _a.call(metricQueriesForNamespace, namespace);
};
//# sourceMappingURL=metricQueries.js.map