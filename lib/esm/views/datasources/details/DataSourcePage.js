import * as React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HorizontalNav, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
import DataSourceDetailsPage from './DataSourceDetailsPage';
import DataSourcePageTitle from './DataSourcePageTitle';
import DataSourceYAMLPage from './DataSourceYamlPage';
var DataSourceNavPage = function (_a) {
    var kind = _a.kind, name = _a.name, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var _b = useK8sWatchResource({
        kind: kind,
        name: name,
        namespace: namespace,
    }), dataSource = _b[0], loaded = _b[1];
    var pages = React.useMemo(function () { return [
        {
            component: DataSourceDetailsPage,
            href: '',
            name: t('Details'),
        },
        {
            component: DataSourceYAMLPage,
            href: 'yaml',
            name: t('YAML'),
        },
    ]; }, [t]);
    return (React.createElement(React.Fragment, null,
        React.createElement(DataSourcePageTitle, { dataSource: dataSource, name: name, namespace: namespace }),
        loaded ? (React.createElement(HorizontalNav, { pages: pages, resource: dataSource })) : (React.createElement(Bullseye, null,
            React.createElement(Loading, null)))));
};
export default DataSourceNavPage;
//# sourceMappingURL=DataSourcePage.js.map