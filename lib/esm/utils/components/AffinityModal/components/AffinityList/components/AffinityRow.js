import * as React from 'react';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
import { pluralize } from '@patternfly/react-core';
import { AFFINITY_CONDITION_LABELS, AFFINITY_TYPE_LABLES } from '../utils/constants';
import AffinityRowActionsDropdown from './AffinityRowActionsDropdown';
var AffinityRow = function (_a) {
    var _b, _c, _d;
    var activeColumnIDs = _a.activeColumnIDs, affinity = _a.obj, _e = _a.rowData, onDelete = _e.onDelete, onEdit = _e.onEdit;
    var expressionsLabel = ((_b = affinity === null || affinity === void 0 ? void 0 : affinity.expressions) === null || _b === void 0 ? void 0 : _b.length) > 0 && pluralize((_c = affinity === null || affinity === void 0 ? void 0 : affinity.expressions) === null || _c === void 0 ? void 0 : _c.length, 'Expression');
    var fieldsLabel = ((_d = affinity === null || affinity === void 0 ? void 0 : affinity.fields) === null || _d === void 0 ? void 0 : _d.length) > 0 && pluralize(affinity === null || affinity === void 0 ? void 0 : affinity.fields.length, 'Node Field');
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "type" }, AFFINITY_TYPE_LABLES[affinity === null || affinity === void 0 ? void 0 : affinity.type]),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "condition" }, AFFINITY_CONDITION_LABELS[affinity === null || affinity === void 0 ? void 0 : affinity.condition]),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "weight" }, (affinity === null || affinity === void 0 ? void 0 : affinity.weight) || NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "terms" },
            React.createElement("div", null, expressionsLabel),
            " ",
            React.createElement("div", null, fieldsLabel)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-v5-c-table__action", id: "" },
            React.createElement(AffinityRowActionsDropdown, { affinity: affinity, onDelete: onDelete, onEdit: onEdit }))));
};
export default AffinityRow;
//# sourceMappingURL=AffinityRow.js.map