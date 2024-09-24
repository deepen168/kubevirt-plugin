import { ProgressVariant } from '@patternfly/react-core';
export var MetricsTabExpendedSections;
(function (MetricsTabExpendedSections) {
    MetricsTabExpendedSections["migration"] = "migration";
    MetricsTabExpendedSections["network"] = "network";
    MetricsTabExpendedSections["storage"] = "storage";
    MetricsTabExpendedSections["utilization"] = "utilization";
})(MetricsTabExpendedSections || (MetricsTabExpendedSections = {}));
export var getMigrationProgressVariant = function (percentage, isFailed) {
    if (percentage === 100)
        return ProgressVariant.success;
    if (isFailed)
        return ProgressVariant.danger;
    return null;
};
//# sourceMappingURL=utils.js.map