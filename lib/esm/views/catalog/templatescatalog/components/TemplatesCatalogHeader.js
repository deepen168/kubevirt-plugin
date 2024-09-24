import React, { memo, useEffect, useState } from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { CREATING_VMS_FROM_TEMPLATES_LINK } from '@kubevirt-utils/constants/url-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { pluralize, SearchInput, Split, SplitItem, ToggleGroup, ToggleGroupItem, } from '@patternfly/react-core';
import { ListIcon, ThIcon } from '@patternfly/react-icons';
import { CATALOG_FILTERS } from '../utils/consts';
import { hasNoDefaultUserAllFilters } from '../utils/helpers';
export var TemplatesCatalogHeader = memo(function (_a) {
    var filters = _a.filters, itemCount = _a.itemCount, onFilterChange = _a.onFilterChange;
    var t = useKubevirtTranslation().t;
    var _b = useState((filters === null || filters === void 0 ? void 0 : filters.query) || ''), query = _b[0], setQuery = _b[1];
    useEffect(function () {
        // Update debounced value after delay
        var handler = setTimeout(function () {
            onFilterChange(CATALOG_FILTERS.QUERY, query);
        }, 150);
        // Cancel the timeout if value changes (also on delay change or unmount)
        return function () {
            clearTimeout(handler);
        };
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query]);
    return (React.createElement("div", { className: "co-catalog-page__header" },
        React.createElement("div", { className: "co-catalog-page__heading text-capitalize" },
            ((filters === null || filters === void 0 ? void 0 : filters.onlyDefault) || hasNoDefaultUserAllFilters(filters)) && (React.createElement(React.Fragment, null,
                t('Default templates'),
                ' ',
                React.createElement(HelpTextIcon, { bodyContent: React.createElement(React.Fragment, null,
                        t('Red Hat recommended configuration for each OS.'),
                        ' ',
                        React.createElement(ExternalLink, { href: CREATING_VMS_FROM_TEMPLATES_LINK, text: t('Learn more') })) }))),
            (filters === null || filters === void 0 ? void 0 : filters.onlyUser) && t('User templates'),
            (filters === null || filters === void 0 ? void 0 : filters.allItems) && t('All templates')),
        React.createElement("div", { className: "co-catalog-page__filter" },
            React.createElement("div", null,
                React.createElement(SearchInput, { onChange: function (_, val) {
                        setQuery(val);
                    }, onClear: function () {
                        setQuery('');
                        onFilterChange(CATALOG_FILTERS.QUERY, '');
                    }, "aria-label": t('Filter by keyword...'), className: "co-catalog-page__input", "data-test": "search-catalog", id: "filter-text-input", placeholder: t('Filter by keyword...'), type: "text", value: filters === null || filters === void 0 ? void 0 : filters.query })),
            React.createElement(Split, { hasGutter: true },
                React.createElement(SplitItem, null,
                    React.createElement("div", { className: "co-catalog-page__num-items" }, pluralize(itemCount, 'item'))),
                React.createElement(SplitItem, null,
                    React.createElement(ToggleGroup, { "aria-label": "list-or-grid-toggle", isCompact: true },
                        React.createElement(ToggleGroupItem, { "aria-label": "template list button", buttonId: "template-list-btn", icon: React.createElement(ListIcon, null), isSelected: filters === null || filters === void 0 ? void 0 : filters.isList, onChange: function () { return onFilterChange(CATALOG_FILTERS.IS_LIST, true); } }),
                        React.createElement(ToggleGroupItem, { "aria-label": "template grid button", buttonId: "template-grid-btn", icon: React.createElement(ThIcon, null), isSelected: !(filters === null || filters === void 0 ? void 0 : filters.isList), onChange: function () { return onFilterChange(CATALOG_FILTERS.IS_LIST, false); } })))))));
});
TemplatesCatalogHeader.displayName = 'TemplatesCatalogHeader';
//# sourceMappingURL=TemplatesCatalogHeader.js.map