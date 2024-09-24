import React, { useCallback, useMemo, } from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { FormGroup, SelectOption } from '@patternfly/react-core';
import { sourceOptions } from '../constants';
var SelectSourceOption = function (_a) {
    var testId = _a["data-test-id"], label = _a.label, onSelectSource = _a.onSelectSource, options = _a.options, popOver = _a.popOver, selectedSource = _a.selectedSource;
    var onSelect = useCallback(function (_, selection) {
        onSelectSource(selection);
    }, [onSelectSource]);
    var optionComponents = useMemo(function () {
        return options.map(function (option) {
            var _a = sourceOptions[option], description = _a.description, optionLabel = _a.label, type = _a.type;
            return (React.createElement(SelectOption, { description: description, key: type, value: type },
                React.createElement("span", { "data-test-id": type }, optionLabel)));
        });
    }, [options]);
    return (React.createElement(FormGroup, { className: "disk-source-form-group select-source-option", fieldId: testId, isRequired: true, label: label, labelIcon: popOver },
        React.createElement("div", { "data-test-id": testId },
            React.createElement(FormPFSelect, { "data-test-id": testId, id: testId, onSelect: onSelect, selected: selectedSource, selectedLabel: sourceOptions[selectedSource].label, toggleProps: { id: "".concat(testId, "-toggle"), isFullWidth: true } }, optionComponents))));
};
export default SelectSourceOption;
//# sourceMappingURL=SelectSourceOption.js.map