import { modelToRef } from '@kubevirt-ui/kubevirt-api/console';
export var buildUrlForCSVSubscription = function (model, name, namespace) {
    var url = ['/k8s'];
    url.push(namespace ? "/ns/".concat(namespace, "/") : '/all-namespaces/');
    url.push(modelToRef(model));
    url.push("/".concat(encodeURIComponent(name)));
    url.push('/subscription');
    return url.join('');
};
export var isNewBadgeNeeded = function (installedCSV) {
    var _a;
    var installationDate = new Date((_a = installedCSV === null || installedCSV === void 0 ? void 0 : installedCSV.metadata) === null || _a === void 0 ? void 0 : _a.creationTimestamp);
    var now = new Date();
    var twoWeeksMilliseconds = 14 * 24 * 60 * 60 * 1000;
    // if older then 2 weeks return false
    return now.getTime() - installationDate.getTime() < twoWeeksMilliseconds;
};
//# sourceMappingURL=utils.js.map