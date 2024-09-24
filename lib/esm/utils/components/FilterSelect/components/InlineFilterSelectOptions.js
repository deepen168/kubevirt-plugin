import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { SelectGroup, SelectOption } from '@patternfly/react-core';
import { NO_RESULTS } from '../utils/constants';
import InlineFilterSelectOption from './InlineFilterSelectOption';
var InlineFilterSelectOptions = function (_a) {
    var filterOptions = _a.filterOptions, filterValue = _a.filterValue, focusedItemIndex = _a.focusedItemIndex, groupedOptions = _a.groupedOptions;
    var t = useKubevirtTranslation().t;
    if (isEmpty(filterOptions)) {
        return (React.createElement(SelectOption, { isDisabled: true, value: NO_RESULTS }, t('No results found for "{{value}}"', { value: filterValue })));
    }
    if (groupedOptions) {
        return (React.createElement(React.Fragment, null, Object.entries(groupedOptions).map(function (_a) {
            var group = _a[0], opts = _a[1];
            return (React.createElement(SelectGroup, { key: group, label: group }, opts.map(function (option, index) { return (React.createElement(InlineFilterSelectOption, { isFocused: focusedItemIndex === index, key: option.value, option: option })); })));
        })));
    }
    return (React.createElement(React.Fragment, null, filterOptions.map(function (option, index) { return (React.createElement(InlineFilterSelectOption, { isFocused: focusedItemIndex === index, key: option.value, option: option })); })));
};
export default InlineFilterSelectOptions;
//# sourceMappingURL=InlineFilterSelectOptions.js.map