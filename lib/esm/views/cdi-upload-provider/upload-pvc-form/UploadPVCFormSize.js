import React from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NumberInput, SelectOption, Split } from '@patternfly/react-core';
import { dropdownUnits } from '../utils/consts';
var UploadPVCFormSize = function (_a) {
    var _b;
    var requestSizeUnit = _a.requestSizeUnit, requestSizeValue = _a.requestSizeValue, setRequestSizeUnit = _a.setRequestSizeUnit, setRequestSizeValue = _a.setRequestSizeValue;
    var t = useKubevirtTranslation().t;
    var handleRequestSizeInputChange = function (obj) {
        setRequestSizeValue(obj === null || obj === void 0 ? void 0 : obj.value);
        setRequestSizeUnit(obj === null || obj === void 0 ? void 0 : obj.unit);
    };
    var onValueChange = function (event) {
        var _a;
        handleRequestSizeInputChange({
            unit: requestSizeUnit,
            value: Number((_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.value),
        });
    };
    var changeValueBy = function (changeBy) {
        // When default defaultRequestSizeValue is not set, value becomes NaN and increment decrement buttons of NumberSpinner don't work.
        var newValue = Number.isFinite(requestSizeValue) ? requestSizeValue + changeBy : 0 + changeBy;
        handleRequestSizeInputChange({ unit: requestSizeUnit, value: newValue });
    };
    var onUnitChange = function (event, value) {
        handleRequestSizeInputChange({
            unit: value,
            value: requestSizeValue,
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: "control-label co-required", htmlFor: "request-size-input" }, t('Size')),
        React.createElement(Split, { hasGutter: true },
            React.createElement("div", { className: "co-m-number-spinner" },
                React.createElement(NumberInput, { id: "request-size-input", min: 1, minusBtnAriaLabel: t('Decrement'), name: "requestSizeValue", onChange: onValueChange, onMinus: function () { return changeValueBy(-1); }, onPlus: function () { return changeValueBy(1); }, plusBtnAriaLabel: t('Increment'), required: true, value: requestSizeValue })),
            React.createElement(FormPFSelect, { onSelect: onUnitChange, selected: requestSizeUnit, selectedLabel: dropdownUnits[requestSizeUnit] }, (_b = Object.entries(dropdownUnits)) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
                var value = _a[0], label = _a[1];
                return (React.createElement(SelectOption, { key: value, value: value }, label));
            }))),
        React.createElement("p", { className: "help-block", id: "request-size-help" }, t('Ensure your PVC size covers the requirements of the uncompressed image and any other space requirements.'))));
};
export default UploadPVCFormSize;
//# sourceMappingURL=UploadPVCFormSize.js.map