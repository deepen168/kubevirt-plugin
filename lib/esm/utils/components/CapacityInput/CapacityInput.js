import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, NumberInput, SelectList, Split, SplitItem, ValidatedOptions, } from '@patternfly/react-core';
import { SelectOption } from '@patternfly/react-core';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
import FormPFSelect from '../FormPFSelect/FormPFSelect';
import { CAPACITY_UNITS, removeByteSuffix } from './utils';
var CapacityInput = function (_a) {
    var isEditingCreatedDisk = _a.isEditingCreatedDisk, isMinusDisabled = _a.isMinusDisabled, label = _a.label, onChange = _a.onChange, size = _a.size;
    var t = useKubevirtTranslation().t;
    var _b = ((size === null || size === void 0 ? void 0 : size.match(/[a-zA-Z]+/g)) || [])[0], unitValue = _b === void 0 ? '' : _b;
    var _c = ((size === null || size === void 0 ? void 0 : size.match(/[0-9]+/g)) || [])[0], sizeValue = _c === void 0 ? 0 : _c;
    var unit = !(unitValue === null || unitValue === void 0 ? void 0 : unitValue.endsWith('B')) ? "".concat(unitValue, "B") : unitValue;
    var value = Number(sizeValue);
    var onFormatChange = function (_, newUnit) {
        onChange("".concat(Number(value)).concat(removeByteSuffix(newUnit)));
    };
    var unitOptions = Object.values(CAPACITY_UNITS);
    if (!(unitOptions === null || unitOptions === void 0 ? void 0 : unitOptions.includes(unit)))
        unitOptions.push(unit);
    var validated = !value || value <= 0 ? ValidatedOptions.error : ValidatedOptions.default;
    return (React.createElement(FormGroup, { className: "disk-source-form-group", fieldId: "size-required", isRequired: true, label: label },
        React.createElement(Split, { hasGutter: true },
            React.createElement(SplitItem, null,
                React.createElement(NumberInput, { onChange: function (event) {
                        var _a;
                        return Number((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) <= Number.MAX_SAFE_INTEGER &&
                            onChange("".concat(Number(event.target.value)).concat(removeByteSuffix(unit)));
                    }, onPlus: function () {
                        return Number(value) < Number.MAX_SAFE_INTEGER &&
                            onChange("".concat(Number(value) + 1).concat(removeByteSuffix(unit)));
                    }, isDisabled: isEditingCreatedDisk, max: Number.MAX_SAFE_INTEGER, min: 1, minusBtnAriaLabel: t('Decrement'), minusBtnProps: { isDisabled: isMinusDisabled }, onMinus: function () { return onChange("".concat(Number(value) - 1).concat(removeByteSuffix(unit))); }, plusBtnAriaLabel: t('Increment'), value: value })),
            React.createElement(SplitItem, null,
                React.createElement(FormPFSelect, { onSelect: onFormatChange, selected: unit },
                    React.createElement(SelectList, null, unitOptions.map(function (formatOption) { return (React.createElement(SelectOption, { isDisabled: isEditingCreatedDisk, key: formatOption, value: formatOption }, formatOption)); }))))),
        React.createElement(FormGroupHelperText, { validated: validated }, validated === ValidatedOptions.error &&
            t('Size cannot be {{errorValue}}', {
                errorValue: value < 0 ? 'negative' : 'zero',
            }))));
};
export default CapacityInput;
//# sourceMappingURL=CapacityInput.js.map