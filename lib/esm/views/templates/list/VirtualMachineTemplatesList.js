import React from 'react';
import { modelToRef, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import ListPageFilter from '@kubevirt-utils/components/ListPageFilter/ListPageFilter';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ListPageBody, ListPageHeader, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Stack, StackItem } from '@patternfly/react-core';
import VirtualMachineTemplatesCreateButton from './components/VirtualMachineTemplatesCreateButton/VirtualMachineTemplatesCreateButton';
import VirtualMachineTemplatesEmptyState from './components/VirtualMachineTemplatesEmptyState/VirtualMachineTemplatesEmptyState';
import VirtualMachineTemplatesRow from './components/VirtualMachineTemplatesRow';
import VirtualMachineTemplateSupport from './components/VirtualMachineTemplateSupport/VirtualMachineTemplateSupport';
import useHideDeprecatedTemplates from './hooks/useHideDeprecatedTemplates';
import { useTemplatesWithAvailableSource } from './hooks/useTemplatesWithAvailableSource';
import useVirtualMachineTemplatesColumns from './hooks/useVirtualMachineTemplatesColumns';
import useVirtualMachineTemplatesFilters from './hooks/useVirtualMachineTemplatesFilters';
var VirtualMachineTemplatesList = function (_a) {
    var fieldSelector = _a.fieldSelector, hideColumnManagement = _a.hideColumnManagement, hideNameLabelFilters = _a.hideNameLabelFilters, hideTextFilter = _a.hideTextFilter, nameFilter = _a.nameFilter, namespace = _a.namespace, selector = _a.selector, showTitle = _a.showTitle;
    var t = useKubevirtTranslation().t;
    var _b = useTemplatesWithAvailableSource({
        fieldSelector: fieldSelector,
        namespace: namespace,
        onlyAvailable: false,
        onlyDefault: false,
        selector: selector,
    }), availableDatasources = _b.availableDatasources, availableTemplatesUID = _b.availableTemplatesUID, bootSourcesLoaded = _b.bootSourcesLoaded, cloneInProgressDatasources = _b.cloneInProgressDatasources, error = _b.error, loaded = _b.loaded, templates = _b.templates;
    var filters = useVirtualMachineTemplatesFilters(availableTemplatesUID);
    var _c = useListPageFilter(templates, filters, {
        name: { selected: [nameFilter] },
    }), data = _c[0], filteredData = _c[1], onFilterChange = _c[2];
    var _d = useVirtualMachineTemplatesColumns(namespace), columns = _d[0], activeColumns = _d[1], loadedColumns = _d[2];
    var templatesLoaded = loaded && bootSourcesLoaded;
    useHideDeprecatedTemplates(onFilterChange);
    if (templatesLoaded && isEmpty(data)) {
        return React.createElement(VirtualMachineTemplatesEmptyState, { namespace: namespace });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: !(showTitle === false) && t('VirtualMachine Templates') },
            React.createElement(VirtualMachineTemplatesCreateButton, { namespace: namespace })),
        React.createElement(ListPageBody, null,
            React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, null,
                    React.createElement(VirtualMachineTemplateSupport, null)),
                React.createElement(StackItem, null,
                    React.createElement(ListPageFilter, { columnLayout: {
                            columns: columns === null || columns === void 0 ? void 0 : columns.map(function (_a) {
                                var additional = _a.additional, id = _a.id, title = _a.title;
                                return ({
                                    additional: additional,
                                    id: id,
                                    title: title,
                                });
                            }),
                            id: modelToRef(TemplateModel),
                            selectedColumns: new Set(activeColumns === null || activeColumns === void 0 ? void 0 : activeColumns.map(function (col) { return col === null || col === void 0 ? void 0 : col.id; })),
                            type: t('Template'),
                        }, data: data, hideColumnManagement: hideColumnManagement, hideLabelFilter: hideTextFilter, hideNameLabelFilters: hideNameLabelFilters, loaded: templatesLoaded && loadedColumns, onFilterChange: onFilterChange, rowFilters: filters }),
                    React.createElement(VirtualizedTable, { EmptyMsg: function () { return (React.createElement("div", { className: "pf-u-text-align-center", id: "no-templates-msg" }, t('No templates found'))); }, columns: activeColumns, data: filteredData, loaded: templatesLoaded && loadedColumns, loadError: error, Row: VirtualMachineTemplatesRow, rowData: { availableDatasources: availableDatasources, availableTemplatesUID: availableTemplatesUID, cloneInProgressDatasources: cloneInProgressDatasources }, unfilteredData: data }))))));
};
export default VirtualMachineTemplatesList;
//# sourceMappingURL=VirtualMachineTemplatesList.js.map