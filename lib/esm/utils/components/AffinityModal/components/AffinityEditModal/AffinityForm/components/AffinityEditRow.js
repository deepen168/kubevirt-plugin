var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Operator } from '@openshift-console/dynamic-plugin-sdk-internal/lib/api/common-types';
import { Button, ButtonVariant, GridItem, TextInput } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';
import { MinusCircleIcon } from '@patternfly/react-icons';
import './affinity-edit-row.scss';
var AffinityExpressionRow = function (_a) {
    var expression = _a.expression, onChange = _a.onChange, onDelete = _a.onDelete, _b = _a.rowID, rowID = _b === void 0 ? 'affinity' : _b;
    var t = useKubevirtTranslation().t;
    var id = expression.id, key = expression.key, operator = expression.operator, _c = expression.values, values = _c === void 0 ? [] : _c;
    var enableValueField = operator !== Operator.Exists && operator !== Operator.DoesNotExist;
    var _d = useState(false), isOperatorExpended = _d[0], setIsOperatorExpended = _d[1];
    var _e = useState(false), isValuesExpanded = _e[0], setIsValuesExpanded = _e[1];
    var onSelectOperator = function (event, selection) {
        onChange(__assign(__assign({}, expression), { operator: selection }));
        setIsOperatorExpended(false);
    };
    var onSelectValues = function (event, selection) {
        var isValueExist = values.some(function (item) { return item === selection; });
        if (isValueExist) {
            onChange(__assign(__assign({}, expression), { values: values.filter(function (item) { return item !== selection; }) }));
        }
        else {
            onChange(__assign(__assign({}, expression), { values: __spreadArray(__spreadArray([], values, true), [selection], false) }));
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 4 },
            React.createElement(TextInput, { id: "".concat(rowID, "-").concat(id, "-key-input"), isRequired: true, onChange: function (_event, newKey) { return onChange(__assign(__assign({}, expression), { key: newKey })); }, placeholder: t('key'), type: "text", value: key })),
        React.createElement(GridItem, { span: 2 },
            React.createElement(Select, { id: "".concat(rowID, "-").concat(id, "-effect-select"), isOpen: isOperatorExpended, menuAppendTo: "parent", onSelect: onSelectOperator, onToggle: function (_, isExpanded) { return setIsOperatorExpended(isExpanded); }, selections: operator, value: operator }, [Operator.Exists, Operator.DoesNotExist, Operator.In, Operator.NotIn].map(function (operatorOption) { return (React.createElement(SelectOption, { key: operatorOption, value: operatorOption })); }))),
        React.createElement(GridItem, { span: 5 },
            React.createElement(Select, { className: "affinity-edit-row__values-chips", isCreatable: true, isDisabled: !enableValueField, isOpen: isValuesExpanded, menuAppendTo: "parent", onClear: function () { return onChange(__assign(__assign({}, expression), { values: [] })); }, onSelect: onSelectValues, onToggle: function (_, isExpanded) { return setIsValuesExpanded(isExpanded); }, placeholderText: enableValueField ? t('Enter value') : '', selections: enableValueField ? values : [], typeAheadAriaLabel: t('Enter value'), variant: SelectVariant.typeaheadMulti }, values === null || values === void 0 ? void 0 : values.map(function (option) { return (React.createElement(SelectOption, { isDisabled: false, key: option, value: option })); }))),
        React.createElement(GridItem, { span: 1 },
            React.createElement(Button, { id: "".concat(rowID, "-").concat(id, "-delete-btn"), onClick: function () { return onDelete(id); }, variant: ButtonVariant.plain },
                React.createElement(MinusCircleIcon, null)))));
};
export default AffinityExpressionRow;
//# sourceMappingURL=AffinityEditRow.js.map