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
import React from 'react';
import classNames from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Label, LabelGroup } from '@patternfly/react-core';
import { extractKeyValueFromLabel, transformKeyValueToLabel } from './utils';
import './SelectorLabelMatchGroup.scss';
var SelectorLabelMatchGroup = function (_a) {
    var _b;
    var isVMILabel = _a.isVMILabel, labels = _a.labels, setLabels = _a.setLabels;
    var t = useKubevirtTranslation().t;
    var onDeleteLabel = function (key) { return function () {
        return setLabels(function (prevLabels) {
            var updatedLabels = __assign({}, prevLabels);
            delete updatedLabels[key];
            return updatedLabels;
        });
    }; };
    var onEditLabel = function (key) { return function (newText) {
        var _a = extractKeyValueFromLabel(newText), newKey = _a[0], newValue = _a[1];
        if (!!newKey && !!newValue) {
            setLabels(function (prevLabels) {
                var updatedLabels = __assign({}, prevLabels);
                delete updatedLabels[key];
                updatedLabels[newKey] = newValue;
                return updatedLabels;
            });
        }
    }; };
    var onAddLabel = function (newText) {
        var _a = extractKeyValueFromLabel(newText), newKey = _a[0], newValue = _a[1];
        if (!!newKey && !!newValue) {
            setLabels(function (prevLabels) {
                var _a;
                return (__assign(__assign({}, prevLabels), (_a = {}, _a[newKey] = newValue, _a)));
            });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(LabelGroup, { className: "mp-match-label-group", isEditable: true, numLabels: 10 }, (_b = Object.keys(labels || {})) === null || _b === void 0 ? void 0 :
            _b.map(function (key) {
                return (React.createElement(Label, { className: classNames({ 'kv-migration-policy__label-vm': isVMILabel }), color: isVMILabel ? 'grey' : 'blue', isEditable: true, key: key, onClose: onDeleteLabel(key), onEditComplete: function (_, val) { return onEditLabel(key)(val); } }, transformKeyValueToLabel(key, labels[key])));
            }),
            React.createElement(Label, { color: "blue", isEditable: true, onEditComplete: function (_, val) { return onAddLabel(val); }, variant: "outline" }, t('Enter key=value')))));
};
export default SelectorLabelMatchGroup;
//# sourceMappingURL=SelectorLabelMatchGroup.js.map