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
import React, { useState } from 'react';
import SelectToggle from '@kubevirt-utils/components/toggles/SelectToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup } from '@patternfly/react-core';
import { Select, SelectOption } from '@patternfly/react-core';
import { AFFINITY_TYPE_LABLES } from '../../../AffinityList/utils/constants';
var AffinityTypeSelect = function (_a) {
    var focusedAffinity = _a.focusedAffinity, setFocusedAffinity = _a.setFocusedAffinity;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleChange = function (event, value) {
        event.preventDefault();
        setFocusedAffinity(__assign(__assign({}, focusedAffinity), { type: value }));
        setIsOpen(false);
    };
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(FormGroup, { fieldId: "type", isRequired: true, label: t('Type') },
        React.createElement(Select, { toggle: SelectToggle({
                isExpanded: isOpen,
                onClick: onToggle,
                selected: AFFINITY_TYPE_LABLES[focusedAffinity === null || focusedAffinity === void 0 ? void 0 : focusedAffinity.type],
            }), isOpen: isOpen, onSelect: handleChange, selected: focusedAffinity === null || focusedAffinity === void 0 ? void 0 : focusedAffinity.type }, Object.entries(AFFINITY_TYPE_LABLES).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (React.createElement(SelectOption, { key: key, value: key }, value));
        }))));
};
export default AffinityTypeSelect;
//# sourceMappingURL=AffinityTypeSelect.js.map