import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import ClusterServiceVersionModel from '@kubevirt-ui/kubevirt-api/console/models/ClusterServiceVersionModel';
import SubscriptionModel from '@kubevirt-ui/kubevirt-api/console/models/SubscriptionModel';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { LSO_NAME, ODF_OPERATOR_NAME } from '../constants';
var watchedResources = {
    installedCSVs: {
        groupVersionKind: modelToGroupVersionKind(ClusterServiceVersionModel),
        isList: true,
        namespaced: true,
    },
    subscriptions: {
        groupVersionKind: modelToGroupVersionKind(SubscriptionModel),
        isList: true,
        namespaced: false,
    },
};
var getSubscriptionForOperator = function (subscriptions, operatorName) {
    return subscriptions.find(function (sub) { var _a; return ((_a = sub === null || sub === void 0 ? void 0 : sub.spec) === null || _a === void 0 ? void 0 : _a.name) === operatorName; });
};
var getCSVForInstalledVersion = function (clusterServiceVersions, installedCSV) {
    return clusterServiceVersions.find(function (csv) { var _a; return ((_a = csv === null || csv === void 0 ? void 0 : csv.metadata) === null || _a === void 0 ? void 0 : _a.name) === installedCSV; });
};
var useKubevirtStorageOperatorCSVs = function () {
    var _a, _b;
    var resources = useK8sWatchResources(watchedResources);
    var loadErrors = Object.keys(resources).filter(function (key) { var _a; return (_a = resources === null || resources === void 0 ? void 0 : resources[key]) === null || _a === void 0 ? void 0 : _a.loadError; });
    var loaded = Object.keys(resources).every(function (key) { var _a; return (_a = resources === null || resources === void 0 ? void 0 : resources[key]) === null || _a === void 0 ? void 0 : _a.loaded; });
    var subscriptions = resources === null || resources === void 0 ? void 0 : resources.subscriptions;
    var installedCSVs = resources === null || resources === void 0 ? void 0 : resources.installedCSVs;
    var lsoSub = getSubscriptionForOperator(subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.data, LSO_NAME);
    var lsoCSV = lsoSub
        ? getCSVForInstalledVersion(installedCSVs === null || installedCSVs === void 0 ? void 0 : installedCSVs.data, (_a = lsoSub === null || lsoSub === void 0 ? void 0 : lsoSub.status) === null || _a === void 0 ? void 0 : _a.installedCSV)
        : null;
    var odfSub = getSubscriptionForOperator(subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.data, ODF_OPERATOR_NAME);
    var odfCSV = odfSub
        ? getCSVForInstalledVersion(installedCSVs === null || installedCSVs === void 0 ? void 0 : installedCSVs.data, (_b = odfSub === null || odfSub === void 0 ? void 0 : odfSub.status) === null || _b === void 0 ? void 0 : _b.installedCSV)
        : null;
    return {
        loaded: loaded,
        loadErrors: loadErrors,
        lsoCSV: lsoCSV,
        odfCSV: odfCSV,
    };
};
export default useKubevirtStorageOperatorCSVs;
//# sourceMappingURL=useKubevirtStorageOperatorCSVs.js.map