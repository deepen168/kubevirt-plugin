import React from 'react';
import { SelectOption } from '@patternfly/react-core/deprecated';
import { MapKindToAbbr } from '../constants';
import { EnvironmentOption } from '../utils';
var EnvironmentSelectOption = function (_a) {
    var isDisabled = _a.isDisabled, kind = _a.kind, name = _a.name;
    return (React.createElement(SelectOption, { isDisabled: isDisabled, value: new EnvironmentOption(name, kind) },
        React.createElement("span", { className: "sr-only" }, kind),
        React.createElement("span", { className: "co-m-resource-icon co-m-resource-".concat(kind) }, MapKindToAbbr[kind]),
        name));
};
export default EnvironmentSelectOption;
//# sourceMappingURL=EnvironmentSelectOption.js.map