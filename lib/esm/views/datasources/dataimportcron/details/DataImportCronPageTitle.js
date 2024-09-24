import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { DataImportCronModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import DataImportCronActions from '../actions/DataImportCronActions';
var DataImportCronPageTitle = function (_a) {
    var _b;
    var dataImportCron = _a.dataImportCron, name = _a.name, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "pf-c-page__main-breadcrumb" },
            React.createElement(Breadcrumb, { className: "pf-c-breadcrumb co-breadcrumb" },
                React.createElement(BreadcrumbItem, null,
                    React.createElement(Link, { to: "/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/").concat(DataImportCronModelRef) }, t('DataImportCrons'))),
                React.createElement(BreadcrumbItem, null, t('DataImportCron Details')))),
        React.createElement("div", { className: "co-m-nav-title co-m-nav-title--detail co-m-nav-title--breadcrumbs" },
            React.createElement("span", { className: "co-m-pane__heading" },
                React.createElement("h1", { className: "co-m-pane__name co-resource-item" },
                    React.createElement("span", { className: "co-m-resource-icon co-m-resource-icon--lg" }, t('DIC')),
                    React.createElement("span", { className: "co-resource-item__resource-name", "data-test-id": "resource-title" }, name !== null && name !== void 0 ? name : (_b = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _b === void 0 ? void 0 : _b.name,
                        ' ')),
                React.createElement("div", { className: "co-actions" },
                    React.createElement(DataImportCronActions, { dataImportCron: dataImportCron }))))));
};
export default DataImportCronPageTitle;
//# sourceMappingURL=DataImportCronPageTitle.js.map