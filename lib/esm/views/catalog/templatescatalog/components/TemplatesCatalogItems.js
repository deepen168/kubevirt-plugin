import React, { useMemo } from 'react';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Gallery, StackItem } from '@patternfly/react-core';
import useTemplatesCatalogColumns from '../hooks/useTemplatesCatalogColumns';
import { TemplatesCatalogRow } from './TemplatesCatalogRow';
import { TemplateTile } from './TemplatesCatalogTile';
export var TemplatesCatalogItems = function (_a) {
    var availableDatasources = _a.availableDatasources, availableTemplatesUID = _a.availableTemplatesUID, bootSourcesLoaded = _a.bootSourcesLoaded, filters = _a.filters, loaded = _a.loaded, onTemplateClick = _a.onTemplateClick, templates = _a.templates;
    var columns = useTemplatesCatalogColumns();
    var sortedTemplates = useMemo(function () {
        return templates.sort(function (a, b) { var _a, _b, _c; return (_b = (_a = a === null || a === void 0 ? void 0 : a.metadata) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.localeCompare((_c = b === null || b === void 0 ? void 0 : b.metadata) === null || _c === void 0 ? void 0 : _c.name); });
    }, [templates]);
    return (filters === null || filters === void 0 ? void 0 : filters.isList) ? (React.createElement("div", { className: "vm-catalog-table-container" },
        React.createElement(VirtualizedTable, { columns: columns, data: templates, loaded: loaded && bootSourcesLoaded, loadError: null, Row: TemplatesCatalogRow, rowData: { availableDatasources: availableDatasources, availableTemplatesUID: availableTemplatesUID, onTemplateClick: onTemplateClick }, unfilteredData: templates }))) : (React.createElement(StackItem, { className: "co-catalog-page__grid vm-catalog-grid-container" },
        React.createElement(Gallery, { className: "vm-catalog-grid", hasGutter: true, id: "vm-catalog-grid" }, sortedTemplates.map(function (template) {
            var _a;
            return (React.createElement(TemplateTile, { availableDatasources: availableDatasources, availableTemplatesUID: availableTemplatesUID, bootSourcesLoaded: bootSourcesLoaded, key: (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.uid, onClick: onTemplateClick, template: template }));
        }))));
};
//# sourceMappingURL=TemplatesCatalogItems.js.map