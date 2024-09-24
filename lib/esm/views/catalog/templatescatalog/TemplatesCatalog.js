import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import useHideDeprecatedTemplateTiles from '@catalog/templatescatalog/hooks/useHideDeprecatedTemplateTiles';
import { clearSessionStorageVM } from '@catalog/utils/WizardVMContext';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { logTemplateFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { TEMPLATE_SELECTED } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { Stack, Toolbar, ToolbarContent } from '@patternfly/react-core';
import { TemplatesCatalogDrawer } from './components/TemplatesCatalogDrawer/TemplatesCatalogDrawer';
import { TemplatesCatalogEmptyState } from './components/TemplatesCatalogEmptyState';
import { TemplatesCatalogFilters } from './components/TemplatesCatalogFilters/TemplatesCatalogFilters';
import { TemplatesCatalogHeader } from './components/TemplatesCatalogHeader';
import { TemplatesCatalogItems } from './components/TemplatesCatalogItems';
import { skeletonCatalog } from './components/TemplatesCatalogSkeleton';
import { useTemplatesWithAvailableSource } from './hooks/useTemplatesWithAvailableSource';
import { useTemplatesFilters } from './hooks/useVmTemplatesFilters';
import { filterTemplates } from './utils/helpers';
import './TemplatesCatalog.scss';
var TemplatesCatalog = function (_a) {
    var currentTab = _a.currentTab;
    var namespace = useParams().ns;
    var _b = useState(undefined), selectedTemplate = _b[0], setSelectedTemplate = _b[1];
    var _c = useTemplatesFilters(), filters = _c[0], onFilterChange = _c[1], clearAll = _c[2];
    var _d = useTemplatesWithAvailableSource({
        namespace: filters.namespace,
        onlyAvailable: filters.onlyAvailable,
        onlyDefault: filters.onlyDefault,
    }), availableDatasources = _d.availableDatasources, availableTemplatesUID = _d.availableTemplatesUID, bootSourcesLoaded = _d.bootSourcesLoaded, loaded = _d.loaded, templates = _d.templates;
    var filteredTemplates = useMemo(function () { return filterTemplates(templates, filters); }, [templates, filters]);
    useHideDeprecatedTemplateTiles(currentTab, onFilterChange);
    return (React.createElement(Stack, { className: "vm-catalog", hasGutter: true },
        loaded ? (React.createElement("div", { className: "co-catalog-page co-catalog-page--with-sidebar" },
            React.createElement(TemplatesCatalogFilters, { filters: filters, onFilterChange: onFilterChange }),
            React.createElement(Stack, { className: "co-catalog-page__content" },
                React.createElement(Toolbar, { inset: { default: 'insetNone' }, isSticky: true },
                    React.createElement(ToolbarContent, null,
                        React.createElement(TemplatesCatalogHeader, { filters: filters, itemCount: filteredTemplates.length, onFilterChange: onFilterChange }))),
                (filteredTemplates === null || filteredTemplates === void 0 ? void 0 : filteredTemplates.length) > 0 ? (React.createElement(TemplatesCatalogItems, { onTemplateClick: function (template) {
                        clearSessionStorageVM();
                        setSelectedTemplate(template);
                        logTemplateFlowEvent(TEMPLATE_SELECTED, template);
                    }, availableDatasources: availableDatasources, availableTemplatesUID: availableTemplatesUID, bootSourcesLoaded: bootSourcesLoaded, filters: filters, loaded: loaded, templates: filteredTemplates })) : (React.createElement(TemplatesCatalogEmptyState, { bootSourcesLoaded: bootSourcesLoaded, onClearFilters: clearAll }))))) : (skeletonCatalog),
        React.createElement(TemplatesCatalogDrawer, { isOpen: !!selectedTemplate, namespace: namespace !== null && namespace !== void 0 ? namespace : DEFAULT_NAMESPACE, onClose: function () { return setSelectedTemplate(undefined); }, template: selectedTemplate })));
};
export default TemplatesCatalog;
//# sourceMappingURL=TemplatesCatalog.js.map