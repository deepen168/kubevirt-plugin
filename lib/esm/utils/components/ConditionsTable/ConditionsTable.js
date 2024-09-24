var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { ConditionsTableRow } from './components/ConditionsTableRow';
import useConditionsTableColumns from './components/useConditionsTableColumns';
export var K8sResourceConditionStatus;
(function (K8sResourceConditionStatus) {
    K8sResourceConditionStatus["False"] = "False";
    K8sResourceConditionStatus["True"] = "True";
    K8sResourceConditionStatus["Unknown"] = "Unknown";
})(K8sResourceConditionStatus || (K8sResourceConditionStatus = {}));
export var ConditionsTable = function (_a) {
    var conditions = _a.conditions;
    var columns = useConditionsTableColumns();
    var mutatedConditions = React.useMemo(function () { return __spreadArray([], (conditions || []), true); }, [conditions]);
    return (React.createElement(VirtualizedTable, { columns: columns, data: mutatedConditions, loaded: true, loadError: null, Row: ConditionsTableRow, unfilteredData: mutatedConditions }));
};
ConditionsTable.displayName = 'ConditionsTable';
//# sourceMappingURL=ConditionsTable.js.map