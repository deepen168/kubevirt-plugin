var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import cn from 'classnames';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { RedExclamationCircleIcon, YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
import { ExpandableRowContent, Tbody, Td, Tr } from '@patternfly/react-table';
var VirtualMachineDiagnosticTabRow = function (_a) {
    var _b;
    var activeColumns = _a.activeColumns, expend = _a.expend, index = _a.index, obj = _a.obj, setExpend = _a.setExpend;
    var isExpanded = (expend === null || expend === void 0 ? void 0 : expend.expended.has(obj === null || obj === void 0 ? void 0 : obj.id)) && (obj === null || obj === void 0 ? void 0 : obj.message);
    var activeColumnsObj = new Set(activeColumns.map(function (_a) {
        var id = _a.id;
        return id;
    }));
    return (React.createElement(Tbody, { isExpanded: isExpanded },
        React.createElement(Tr, { className: cn({ 'VirtualMachineDiagnosticTabRow--row': isExpanded }) },
            React.createElement(Td, { expand: (obj === null || obj === void 0 ? void 0 : obj.message) && {
                    expandId: "message-".concat(index),
                    isExpanded: isExpanded,
                    onToggle: function () {
                        return setExpend(function (expendObj) {
                            isExpanded ? expendObj.expended.delete(obj === null || obj === void 0 ? void 0 : obj.id) : expendObj.expended.add(obj === null || obj === void 0 ? void 0 : obj.id);
                            return { expended: new Set(expendObj.expended), ids: new Set(expendObj.ids) };
                        });
                    },
                    rowIndex: index,
                } }), (_b = __spreadArray([], activeColumnsObj, true)) === null || _b === void 0 ? void 0 :
            _b.map(function (column) {
                var _a;
                return (React.createElement(Td, { id: column, key: column }, ((_a = obj === null || obj === void 0 ? void 0 : obj[column]) === null || _a === void 0 ? void 0 : _a.toString()) || NO_DATA_DASH));
            })),
        (obj === null || obj === void 0 ? void 0 : obj.message) && (React.createElement(Tr, { isExpanded: isExpanded },
            React.createElement(Td, { colSpan: 12 },
                React.createElement("div", { className: "VirtualMachineDiagnosticTabRow--expanded" },
                    (obj === null || obj === void 0 ? void 0 : obj.status) === 'False' && React.createElement(RedExclamationCircleIcon, null),
                    !(obj === null || obj === void 0 ? void 0 : obj.status) && React.createElement(YellowExclamationTriangleIcon, null),
                    React.createElement(ExpandableRowContent, null, obj === null || obj === void 0 ? void 0 : obj.message)))))));
};
export default VirtualMachineDiagnosticTabRow;
//# sourceMappingURL=VirtualMachineDiagnosticTabRow.js.map