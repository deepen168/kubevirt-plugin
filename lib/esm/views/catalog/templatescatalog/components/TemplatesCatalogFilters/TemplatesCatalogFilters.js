import React, { memo } from 'react';
import { CATALOG_FILTERS } from '@catalog/templatescatalog/utils/consts';
import { hasNoDefaultUserAllFilters } from '@catalog/templatescatalog/utils/helpers';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HIDE_DEPRECATED_TEMPLATES_KEY, OS_NAME_LABELS, OS_NAME_TYPES, WORKLOADS, WORKLOADS_LABELS, } from '@kubevirt-utils/resources/template/utils/constants';
import { VerticalTabs, VerticalTabsTab } from '@patternfly/react-catalog-view-extension';
import { FilterSidePanel } from '@patternfly/react-catalog-view-extension/dist/esm/components/FilterSidePanel';
import { TemplatesCatalogProjectsDropdown } from '../TemplatesCatalogProjectsDropdown/TemplatesCatalogProjectsDropdown';
import { TemplatesCatalogFiltersGroup } from './TemplatesCatalogFiltersGroup';
export var TemplatesCatalogFilters = memo(function (_a) {
    var filters = _a.filters, onFilterChange = _a.onFilterChange;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: "co-catalog-page__tabs" },
        React.createElement(TemplatesCatalogProjectsDropdown, { onChange: function (project) { return onFilterChange(CATALOG_FILTERS.NAMESPACE, project); }, selectedProject: filters.namespace }),
        React.createElement(VerticalTabs, null,
            React.createElement(VerticalTabsTab, { active: filters === null || filters === void 0 ? void 0 : filters.allItems, "data-test-id": "catalog-template-filter-all-items", id: 'all-templates', onActivate: function () { return onFilterChange(CATALOG_FILTERS.ALL_ITEMS, true); }, title: t('All templates') }),
            React.createElement(VerticalTabsTab, { active: (filters === null || filters === void 0 ? void 0 : filters.onlyDefault) || hasNoDefaultUserAllFilters(filters), "data-test-id": "catalog-template-filter-default-templates", id: 'default-templates', onActivate: function () { return onFilterChange(CATALOG_FILTERS.ONLY_DEFAULT, true); }, title: t('Default templates') }),
            React.createElement(VerticalTabsTab, { active: filters === null || filters === void 0 ? void 0 : filters.onlyUser, id: 'user-templates', onActivate: function () { return onFilterChange(CATALOG_FILTERS.ONLY_USER, true); }, title: t('User templates') })),
        React.createElement(FilterSidePanel, { className: "co-catalog-page__tabs", id: "vm-catalog-filter-panel" },
            React.createElement(TemplatesCatalogFiltersGroup, { filters: [
                    { label: t('Hide deprecated templates'), value: HIDE_DEPRECATED_TEMPLATES_KEY },
                ], onFilterClick: function () {
                    return onFilterChange(CATALOG_FILTERS.HIDE_DEPRECATED_TEMPLATES, !(filters === null || filters === void 0 ? void 0 : filters.hideDeprecatedTemplates));
                }, pickedFilters: new Set((filters === null || filters === void 0 ? void 0 : filters.hideDeprecatedTemplates) ? [HIDE_DEPRECATED_TEMPLATES_KEY] : []), groupKey: CATALOG_FILTERS.HIDE_DEPRECATED_TEMPLATES }),
            React.createElement(TemplatesCatalogFiltersGroup, { onFilterClick: function () {
                    return onFilterChange(CATALOG_FILTERS.ONLY_AVAILABLE, !(filters === null || filters === void 0 ? void 0 : filters.onlyAvailable));
                }, filters: [{ label: t('Boot source available'), value: 'only-available' }], groupKey: 'boot-source-available', pickedFilters: new Set((filters === null || filters === void 0 ? void 0 : filters.onlyAvailable) ? ['only-available'] : []) }),
            React.createElement(TemplatesCatalogFiltersGroup, { filters: Object.values(OS_NAME_TYPES).map(function (v) { return ({
                    label: OS_NAME_LABELS === null || OS_NAME_LABELS === void 0 ? void 0 : OS_NAME_LABELS[v],
                    value: v,
                }); }), groupKey: "osName", groupLabel: t('Operating system'), onFilterClick: onFilterChange, pickedFilters: filters.osName }),
            React.createElement(TemplatesCatalogFiltersGroup, { filters: Object.values(WORKLOADS).map(function (v) { return ({
                    label: WORKLOADS_LABELS === null || WORKLOADS_LABELS === void 0 ? void 0 : WORKLOADS_LABELS[v],
                    value: v,
                }); }), groupKey: "workload", groupLabel: t('Workload'), onFilterClick: onFilterChange, pickedFilters: filters.workload }))));
});
//# sourceMappingURL=TemplatesCatalogFilters.js.map