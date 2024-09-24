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
import React, { useCallback } from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { BinaryUnit, toIECUnit } from '@kubevirt-utils/utils/units';
import { NumberInput, SelectOption, Split, SplitItem } from '@patternfly/react-core';
import { fromIECUnit } from '../../../MigrationPolicyEditModal/utils/utils';
var unitOptions = [BinaryUnit.Ki, BinaryUnit.Mi, BinaryUnit.Gi];
var BandwidthInput = function (_a) {
    var setState = _a.setState, state = _a.state;
    var t = useKubevirtTranslation().t;
    var onSelectUnit = useCallback(function (_, newUnit) {
        setState(function (prev) { return (__assign(__assign({}, prev), { unit: fromIECUnit(newUnit) })); });
    }, [setState]);
    return (React.createElement(Split, { hasGutter: true },
        React.createElement(SplitItem, null,
            React.createElement(NumberInput, { onChange: function (event) {
                    return +event.target.value >= 0 &&
                        setState(function (prev) { return (__assign(__assign({}, prev), { value: +event.target.value })); });
                }, min: 0, minusBtnAriaLabel: t('Decrement'), onMinus: function () { return setState(function (prev) { return (__assign(__assign({}, prev), { value: --prev.value })); }); }, onPlus: function () { return setState(function (prev) { return (__assign(__assign({}, prev), { value: (prev === null || prev === void 0 ? void 0 : prev.value) + 1 || 1 })); }); }, plusBtnAriaLabel: t('Increment'), value: state === null || state === void 0 ? void 0 : state.value })),
        React.createElement(SplitItem, null,
            React.createElement(FormPFSelect, { onSelect: onSelectUnit, selected: state === null || state === void 0 ? void 0 : state.unit, selectedLabel: toIECUnit(state === null || state === void 0 ? void 0 : state.unit) }, unitOptions.map(function (unitOption) { return (React.createElement(SelectOption, { key: unitOption, value: unitOption }, toIECUnit(unitOption))); })))));
};
export default BandwidthInput;
//# sourceMappingURL=BandwidthInput.js.map