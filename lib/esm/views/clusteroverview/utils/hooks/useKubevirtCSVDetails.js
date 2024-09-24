import { useMemo } from 'react';
import { CatalogSourceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models/CatalogSourceModel';
import ClusterServiceVersionModel, { ClusterServiceVersionModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console/models/ClusterServiceVersionModel';
import { SubscriptionModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models/SubscriptionModel';
import { isUpstream } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { KUBEVIRT_HYPERCONVERGED, OPENSHIFT_CNV, OPENSHIFT_OPERATOR_LIFECYCLE_MANAGER_NAMESPACE, PACKAGESERVER, } from '../constants';
import { buildUrlForCSVSubscription } from './../utils';
export var useKubevirtCSVDetails = function () {
    var _a, _b, _c, _d, _e;
    var _f = useK8sWatchResource({
        groupVersionKind: SubscriptionModelGroupVersionKind,
        isList: true,
        namespace: isUpstream ? KUBEVIRT_HYPERCONVERGED : OPENSHIFT_CNV,
    }), subscriptions = _f[0], loadedSubscription = _f[1], loadSubscriptionError = _f[2];
    var subscription = useMemo(function () { return subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.find(function (sub) { var _a; return (_a = sub === null || sub === void 0 ? void 0 : sub.spec) === null || _a === void 0 ? void 0 : _a.name.endsWith(KUBEVIRT_HYPERCONVERGED); }); }, [subscriptions]);
    var _g = useK8sWatchResource(subscription && {
        groupVersionKind: ClusterServiceVersionModelGroupVersionKind,
        name: (_a = subscription === null || subscription === void 0 ? void 0 : subscription.status) === null || _a === void 0 ? void 0 : _a.installedCSV,
        namespace: (_b = subscription === null || subscription === void 0 ? void 0 : subscription.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
    }), installedCSV = _g[0], loadedCSV = _g[1], loadCSVError = _g[2];
    var _h = useK8sWatchResource(subscription && {
        groupVersionKind: CatalogSourceModelGroupVersionKind,
        name: (_c = subscription === null || subscription === void 0 ? void 0 : subscription.spec) === null || _c === void 0 ? void 0 : _c.source,
        namespace: (_d = subscription === null || subscription === void 0 ? void 0 : subscription.spec) === null || _d === void 0 ? void 0 : _d.sourceNamespace,
    }), catalogSource = _h[0], loadedSource = _h[1], loadSourceError = _h[2];
    var loadErrors = loadSourceError || loadSubscriptionError || loadCSVError;
    var loaded = loadedSubscription && loadedCSV && loadedSource;
    var catalogSourceMissing = useMemo(function () {
        var _a, _b;
        return !catalogSource &&
            !(((_a = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.metadata) === null || _a === void 0 ? void 0 : _a.name) === PACKAGESERVER &&
                ((_b = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.metadata) === null || _b === void 0 ? void 0 : _b.namespace) === OPENSHIFT_OPERATOR_LIFECYCLE_MANAGER_NAMESPACE);
    }, [catalogSource, installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.metadata]);
    var _j = useMemo(function () {
        var _a, _b, _c, _d;
        return {
            displayName: (_a = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.spec) === null || _a === void 0 ? void 0 : _a.displayName,
            provider: (_c = (_b = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.spec) === null || _b === void 0 ? void 0 : _b.provider) === null || _c === void 0 ? void 0 : _c.name,
            version: (_d = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.spec) === null || _d === void 0 ? void 0 : _d.version,
        };
    }, [installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.spec]), displayName = _j.displayName, provider = _j.provider, version = _j.version;
    var operatorLink = useMemo(function () {
        var _a, _b;
        return buildUrlForCSVSubscription(ClusterServiceVersionModel, (_a = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.metadata) === null || _a === void 0 ? void 0 : _a.name, (_b = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.metadata) === null || _b === void 0 ? void 0 : _b.namespace);
    }, [installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.metadata]);
    return {
        catalogSourceMissing: catalogSourceMissing,
        displayName: displayName,
        installedCSV: installedCSV,
        kubevirtSubscription: subscription,
        loaded: loaded,
        loadErrors: loadErrors,
        operatorLink: operatorLink,
        provider: provider,
        updateChannel: (_e = subscription === null || subscription === void 0 ? void 0 : subscription.spec) === null || _e === void 0 ? void 0 : _e.channel,
        version: version,
    };
};
//# sourceMappingURL=useKubevirtCSVDetails.js.map