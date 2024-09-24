import * as React from 'react';
import { DataImportCronModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HorizontalNav, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
import DataImportCronDetailsPage from './DataImportCronDetailsPage';
import DataImportCronPageTitle from './DataImportCronPageTitle';
import DataImportCronYAMLPage from './DataImportCronYamlPage';
var DataImportCronNavPage = function (_a) {
    var name = _a.name, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var _b = useK8sWatchResource({
        groupVersionKind: DataImportCronModelGroupVersionKind,
        name: name,
        namespace: namespace,
    }), dataImportCron = _b[0], loaded = _b[1];
    var pages = React.useMemo(function () { return [
        {
            component: DataImportCronDetailsPage,
            href: '',
            name: t('Details'),
        },
        {
            component: DataImportCronYAMLPage,
            href: 'yaml',
            name: t('YAML'),
        },
    ]; }, [t]);
    return (React.createElement(React.Fragment, null,
        React.createElement(DataImportCronPageTitle, { dataImportCron: dataImportCron, name: name, namespace: namespace }),
        loaded ? (React.createElement(HorizontalNav, { pages: pages, resource: dataImportCron })) : (React.createElement(Bullseye, null,
            React.createElement(Loading, null)))));
};
export default DataImportCronNavPage;
//# sourceMappingURL=DataImportCronPage.js.map