var VMQueries;
(function (VMQueries) {
    VMQueries["CPU_REQUESTED"] = "CPU_REQUESTED";
    VMQueries["CPU_USAGE"] = "CPU_USAGE";
    VMQueries["FILESYSTEM_READ_USAGE"] = "FILESYSTEM_READ_USAGE";
    VMQueries["FILESYSTEM_USAGE_TOTAL"] = "FILESYSTEM_TOTAL_USAGE";
    VMQueries["FILESYSTEM_WRITE_USAGE"] = "FILESYSTEM_WRITE_USAGE";
    VMQueries["INSTANT_MIGRATION_DATA_PROCESSED"] = "INSTANT_MIGRATION_DATA_PROCESSED";
    VMQueries["INSTANT_MIGRATION_DATA_REMAINING"] = "INSTANT_MIGRATION_DATA_REMAINING";
    VMQueries["MEMORY_USAGE"] = "MEMORY_USAGE";
    VMQueries["MIGRATION_DATA_PROCESSED"] = "MIGRATION_DATA_PROCESSED";
    VMQueries["MIGRATION_DATA_REMAINING"] = "MIGRATION_DATA_REMAINING";
    VMQueries["MIGRATION_DISK_TRANSFER_RATE"] = "MIGRATION_DISK_TRANSFER_RATE";
    VMQueries["MIGRATION_MEMORY_DIRTY_RATE"] = "MIGRATION_MEMORY_DIRTY_RATE";
    VMQueries["NETWORK_IN_BY_INTERFACE_USAGE"] = "NETWORK_IN_BY_INTERFACE_USAGE";
    VMQueries["NETWORK_IN_USAGE"] = "NETWORK_IN_USAGE";
    VMQueries["NETWORK_OUT_BY_INTERFACE_USAGE"] = "NETWORK_OUT_BY_INTERFACE_USAGE";
    VMQueries["NETWORK_OUT_USAGE"] = "NETWORK_OUT_USAGE";
    VMQueries["NETWORK_TOTAL_BY_INTERFACE_USAGE"] = "NETWORK_TOTAL_BY_INTERFACE_USAGE";
    VMQueries["NETWORK_TOTAL_USAGE"] = "NETWORK_TOTAL_USAGE";
    VMQueries["STORAGE_IOPS_TOTAL"] = "STORAGE_IOPS_TOTAL";
})(VMQueries || (VMQueries = {}));
export var getUtilizationQueries = function (_a) {
    var _b;
    var duration = _a.duration, launcherPodName = _a.launcherPodName, obj = _a.obj;
    var _c = (obj === null || obj === void 0 ? void 0 : obj.metadata) || {}, name = _c.name, namespace = _c.namespace;
    return _b = {},
        _b[VMQueries.CPU_REQUESTED] = "sum(kube_pod_resource_request{resource='cpu',pod='".concat(launcherPodName, "',namespace='").concat(namespace, "'}) BY (name, namespace)"),
        _b[VMQueries.CPU_USAGE] = "sum(rate(kubevirt_vmi_cpu_usage_seconds_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b[VMQueries.FILESYSTEM_READ_USAGE] = "sum(rate(kubevirt_vmi_storage_read_traffic_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b[VMQueries.FILESYSTEM_USAGE_TOTAL] = "sum(rate(kubevirt_vmi_storage_read_traffic_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "]) + rate(kubevirt_vmi_storage_write_traffic_bytes_total{name='").concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b[VMQueries.FILESYSTEM_WRITE_USAGE] = "sum(rate(kubevirt_vmi_storage_write_traffic_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b[VMQueries.INSTANT_MIGRATION_DATA_PROCESSED] = "kubevirt_vmi_migration_data_processed_bytes{name='".concat(name, "',namespace='").concat(namespace, "'}"),
        _b[VMQueries.INSTANT_MIGRATION_DATA_REMAINING] = "kubevirt_vmi_migration_data_remaining_bytes{name='".concat(name, "',namespace='").concat(namespace, "'}"),
        _b[VMQueries.MEMORY_USAGE] = "last_over_time(kubevirt_vmi_memory_used_bytes{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])"),
        _b[VMQueries.MIGRATION_DATA_PROCESSED] = "sum(sum_over_time(kubevirt_vmi_migration_data_processed_bytes{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "]))  BY (name, namespace)"),
        _b[VMQueries.MIGRATION_DATA_REMAINING] = "sum(sum_over_time(kubevirt_vmi_migration_data_remaining_bytes{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "]))  BY (name, namespace)"),
        _b[VMQueries.MIGRATION_DISK_TRANSFER_RATE] = "sum(sum_over_time(kubevirt_vmi_migration_disk_transfer_rate_bytes\t{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "]))  BY (name, namespace)"),
        _b[VMQueries.MIGRATION_MEMORY_DIRTY_RATE] = "sum(sum_over_time(kubevirt_vmi_migration_dirty_memory_rate_bytes{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "]))  BY (name, namespace)"),
        _b[VMQueries.NETWORK_IN_BY_INTERFACE_USAGE] = "sum(rate(kubevirt_vmi_network_receive_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace, interface)"),
        _b[VMQueries.NETWORK_IN_USAGE] = "sum(rate(kubevirt_vmi_network_receive_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b[VMQueries.NETWORK_OUT_BY_INTERFACE_USAGE] = "sum(rate(kubevirt_vmi_network_transmit_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace, interface)"),
        _b[VMQueries.NETWORK_OUT_USAGE] = "sum(rate(kubevirt_vmi_network_transmit_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b[VMQueries.NETWORK_TOTAL_BY_INTERFACE_USAGE] = "sum(rate(kubevirt_vmi_network_receive_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace, interface)"),
        _b[VMQueries.NETWORK_TOTAL_USAGE] = "sum(rate(kubevirt_vmi_network_receive_bytes_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b[VMQueries.STORAGE_IOPS_TOTAL] = "sum(rate(kubevirt_vmi_storage_iops_read_total{name='".concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "]) + rate(kubevirt_vmi_storage_iops_write_total{name='").concat(name, "',namespace='").concat(namespace, "'}[").concat(duration, "])) BY (name, namespace)"),
        _b;
};
//# sourceMappingURL=queries.js.map