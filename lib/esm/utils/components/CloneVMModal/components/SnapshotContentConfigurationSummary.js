import React from 'react';
import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineSnapshotContentModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotContentModel';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant } from '@patternfly/react-core';
import ConfigurationSummary from './ConfigurationSummary';
var SnapshotContentConfigurationSummary = function (_a) {
    var _b, _c;
    var snapshot = _a.snapshot;
    var t = useKubevirtTranslation().t;
    var _d = useK8sWatchResource(snapshot && {
        groupVersionKind: modelToGroupVersionKind(VirtualMachineSnapshotContentModel),
        name: snapshot.status.virtualMachineSnapshotContentName,
        namespace: snapshot.metadata.namespace || DEFAULT_NAMESPACE,
    }), snapshotContent = _d[0], loaded = _d[1], error = _d[2];
    if (!loaded)
        return React.createElement(Loading, null);
    if (error) {
        return (React.createElement(Alert, { isInline: true, title: t('Error loading the VirtualMachineSnapshotContent'), variant: AlertVariant.danger }, error === null || error === void 0 ? void 0 : error.message));
    }
    return (React.createElement(ConfigurationSummary, { vm: (_c = (_b = snapshotContent === null || snapshotContent === void 0 ? void 0 : snapshotContent.spec) === null || _b === void 0 ? void 0 : _b.source) === null || _c === void 0 ? void 0 : _c.virtualMachine }));
};
export default SnapshotContentConfigurationSummary;
//# sourceMappingURL=SnapshotContentConfigurationSummary.js.map