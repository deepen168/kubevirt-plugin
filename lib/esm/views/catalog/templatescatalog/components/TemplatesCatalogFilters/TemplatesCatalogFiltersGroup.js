import React, { memo, useMemo, useState } from 'react';
import { FilterSidePanelCategory, FilterSidePanelCategoryItem, } from '@patternfly/react-catalog-view-extension';
import { Split, SplitItem, Title } from '@patternfly/react-core';
import { AngleDownIcon, AngleRightIcon } from '@patternfly/react-icons';
import './TemplatesCatalogFiltersGroup.scss';
export var TemplatesCatalogFiltersGroup = memo(function (_a) {
    var _b = _a.defaultExpanded, defaultExpanded = _b === void 0 ? true : _b, filters = _a.filters, groupKey = _a.groupKey, groupLabel = _a.groupLabel, onFilterClick = _a.onFilterClick, pickedFilters = _a.pickedFilters;
    var _c = useState(defaultExpanded), isExpanded = _c[0], setIsExpanded = _c[1];
    var memoFilters = useMemo(function () {
        return filters.map(function (_a) {
            var count = _a.count, label = _a.label, value = _a.value;
            return (React.createElement(FilterSidePanelCategoryItem, { checked: pickedFilters === null || pickedFilters === void 0 ? void 0 : pickedFilters.has(value), count: count, "data-test-id": "".concat(groupKey, "-").concat(label), key: "".concat(groupKey, "-").concat(label), onClick: function () { return onFilterClick(groupKey, value); } }, label !== null && label !== void 0 ? label : value));
        });
    }, [filters, pickedFilters, onFilterClick, groupKey]);
    return (React.createElement(FilterSidePanelCategory, { "data-test-id": "filter-category-".concat(groupLabel) },
        groupLabel && (React.createElement(Split, { className: "vm-filter-group-header", onClick: function () { return setIsExpanded(!isExpanded); } },
            React.createElement(SplitItem, null, isExpanded ? (React.createElement(AngleDownIcon, { className: "pf-c-dropdown__toggle-icon" })) : (React.createElement(AngleRightIcon, { className: "pf-c-dropdown__toggle-icon" }))),
            React.createElement(SplitItem, { className: "vm-filter-group-title", isFilled: true },
                React.createElement(Title, { headingLevel: "h5", size: "md" }, groupLabel)))),
        isExpanded && memoFilters));
});
TemplatesCatalogFiltersGroup.displayName = 'TemplateFilterGroup';
//# sourceMappingURL=TemplatesCatalogFiltersGroup.js.map