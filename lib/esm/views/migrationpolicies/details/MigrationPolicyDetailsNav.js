import * as React from 'react';
import { MigrationPolicyModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { HorizontalNav, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import MigrationPolicyDetailsNavTitle from './components/MigrationPolicyDetailsNavTitle/MigrationPolicyDetailsNavTitle';
import { useMigrationPolicyTabs } from './hooks/useMigrationPolicyTabs';
var MigrationPolicyDetailsNav = function (_a) {
    var name = _a.name, namespace = _a.namespace;
    var mp = useK8sWatchResource({
        groupVersionKind: MigrationPolicyModelGroupVersionKind,
        name: name,
        namespace: namespace,
    })[0];
    var pages = useMigrationPolicyTabs();
    return (React.createElement(React.Fragment, null,
        React.createElement(MigrationPolicyDetailsNavTitle, { mp: mp }),
        React.createElement(HorizontalNav, { pages: pages, resource: mp })));
};
export default MigrationPolicyDetailsNav;
//# sourceMappingURL=MigrationPolicyDetailsNav.js.map