export var KUBEVIRT_VM_LATENCY_LABEL = 'kiagnose/checkup-type';
export var STATUS_TIMEOUT = 'spec.timeout';
export var STATUS_START_TIME_STAMP = 'status.startTimestamp';
export var STATUS_FAILURE_REASON = 'status.failureReason';
export var STATUS_SUCCEEDED = 'status.succeeded';
export var STATUS_COMPILATION_TIME_STAMP = 'status.completionTimestamp';
export var CONFIGMAP_NAME = 'CONFIGMAP_NAME';
export var generateWithNumbers = function (name) {
    return "".concat(name, "-").concat(Math.floor(Math.random() * 10000));
};
export var findObjectByName = function (arr, name) {
    return (arr || []).find(function (obj) { var _a; return ((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.name) === name; });
};
var sortData = function (data, field, isNumberCompare) {
    if (isNumberCompare === void 0) { isNumberCompare = false; }
    return data.sort(function (a, b) {
        var _a, _b, _c, _d, _e;
        var numbersCompare = ((_a = a === null || a === void 0 ? void 0 : a.data) === null || _a === void 0 ? void 0 : _a[field]) > ((_b = b === null || b === void 0 ? void 0 : b.data) === null || _b === void 0 ? void 0 : _b[field]) ? 1 : -1;
        var stringCompare = ((_d = (_c = a === null || a === void 0 ? void 0 : a.data) === null || _c === void 0 ? void 0 : _c[field]) === null || _d === void 0 ? void 0 : _d.localeCompare((_e = b === null || b === void 0 ? void 0 : b.data) === null || _e === void 0 ? void 0 : _e[field])) ? 1 : -1;
        return isNumberCompare ? numbersCompare : stringCompare;
    });
};
export var columnsSorting = function (data, sortDirection, field, isNumberCompare) {
    if (isNumberCompare === void 0) { isNumberCompare = false; }
    var sortedArr = sortData(data, field, isNumberCompare);
    return sortDirection === 'asc' ? sortedArr.reverse() : sortedArr;
};
export var trimLastHistoryPath = function (pathName) {
    return pathName.endsWith('checkups') ? pathName : pathName.replace(/\/[^\/]*$/, '');
};
var getJobContainers = function (job) { var _a, _b, _c; return (_c = (_b = (_a = job === null || job === void 0 ? void 0 : job.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.containers; };
export var getJobByName = function (jobs, configMapName) {
    var _a;
    return (_a = (jobs || [])) === null || _a === void 0 ? void 0 : _a.filter(function (job) {
        var _a, _b;
        var envs = (_a = getJobContainers(job)) === null || _a === void 0 ? void 0 : _a.map(function (containers) { return containers === null || containers === void 0 ? void 0 : containers.env; }).flat();
        var name = (_b = envs === null || envs === void 0 ? void 0 : envs.find(function (env) { return (env === null || env === void 0 ? void 0 : env.name) == CONFIGMAP_NAME; })) === null || _b === void 0 ? void 0 : _b.value;
        return name === configMapName && job;
    }).sort(function (a, b) {
        return new Date(a.metadata.creationTimestamp) < new Date(b.metadata.creationTimestamp) ? 1 : -1;
    });
};
export var NetworkCheckupsStatus;
(function (NetworkCheckupsStatus) {
    NetworkCheckupsStatus["Done"] = "done";
    NetworkCheckupsStatus["Failed"] = "failed";
    NetworkCheckupsStatus["Running"] = "running";
})(NetworkCheckupsStatus || (NetworkCheckupsStatus = {}));
export var getJobStatus = function (job) {
    var _a, _b, _c, _d;
    if (((_a = job === null || job === void 0 ? void 0 : job.status) === null || _a === void 0 ? void 0 : _a.succeeded) === 1)
        return NetworkCheckupsStatus.Done;
    if (((_b = job === null || job === void 0 ? void 0 : job.status) === null || _b === void 0 ? void 0 : _b.active) === 1)
        return NetworkCheckupsStatus.Running;
    if (((_c = job === null || job === void 0 ? void 0 : job.status) === null || _c === void 0 ? void 0 : _c.succeeded) === 0 || ((_d = job === null || job === void 0 ? void 0 : job.status) === null || _d === void 0 ? void 0 : _d.failed) === 1)
        return NetworkCheckupsStatus.Failed;
};
export var getConfigMapStatus = function (configMap, jobStatus) {
    var _a, _b, _c, _d;
    if (((_a = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _a === void 0 ? void 0 : _a[STATUS_SUCCEEDED]) === 'true')
        return NetworkCheckupsStatus.Done;
    if (((_b = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _b === void 0 ? void 0 : _b[STATUS_SUCCEEDED]) === 'false' || jobStatus === NetworkCheckupsStatus.Failed)
        return NetworkCheckupsStatus.Failed;
    if (((_c = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _c === void 0 ? void 0 : _c[STATUS_SUCCEEDED]) === undefined && jobStatus === NetworkCheckupsStatus.Done)
        return NetworkCheckupsStatus.Failed;
    if (((_d = configMap === null || configMap === void 0 ? void 0 : configMap.data) === null || _d === void 0 ? void 0 : _d[STATUS_SUCCEEDED]) === undefined &&
        jobStatus === NetworkCheckupsStatus.Running)
        return NetworkCheckupsStatus.Running;
};
//# sourceMappingURL=utils.js.map