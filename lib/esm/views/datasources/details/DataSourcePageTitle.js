import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { DataSourceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Breadcrumb, BreadcrumbItem, Label } from '@patternfly/react-core';
import DataSourceActions from '../actions/DataSourceActions';
import { isDataSourceReady } from '../utils';
var DataSourcePageTitle = function (_a) {
    var _b;
    var dataSource = _a.dataSource, name = _a.name, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pf-c-page__main-breadcrumb" },
            React.createElement(Breadcrumb, { className: "pf-c-breadcrumb co-breadcrumb" },
                React.createElement(BreadcrumbItem, null,
                    React.createElement(Link, { to: "/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/").concat(DataSourceModelRef) }, t('DataSources'))),
                React.createElement(BreadcrumbItem, null, t('DataSource Details')))),
        React.createElement("div", { className: "co-m-nav-title co-m-nav-title--detail co-m-nav-title--breadcrumbs" },
            React.createElement("span", { className: "co-m-pane__heading" },
                React.createElement("h1", { className: "co-m-pane__name co-resource-item" },
                    React.createElement("span", { className: "co-m-resource-icon co-m-resource-icon--lg" }, t('DS')),
                    React.createElement("span", { className: "co-resource-item__resource-name", "data-test-id": "resource-title" }, name !== null && name !== void 0 ? name : (_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _b === void 0 ? void 0 : _b.name,
                        ' '),
                    isDataSourceReady(dataSource) && (React.createElement("span", { className: "dps-resource-item__resource-status hidden-xs" },
                        React.createElement(Label, { isCompact: true }, t('Ready'))))),
                React.createElement("div", { className: "co-actions" },
                    React.createElement(DataSourceActions, { dataSource: dataSource }))))));
};
export default DataSourcePageTitle;
//# sourceMappingURL=DataSourcePageTitle.js.map