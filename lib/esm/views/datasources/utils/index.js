import { getLabel } from '@kubevirt-utils/resources/shared';
var DATA_SOURCE_CRONJOB_LABEL = 'cdi.kubevirt.io/dataImportCron';
var DATA_SOURCE_PRIMARY_RESOURCE_LABEL = 'operator-sdk/primary-resource';
var DATA_SOURCE_SSP_OWNER_VALUE = 'openshift-cnv/ssp-kubevirt-hyperconverged';
export var isDataSourceReady = function (dataSource) {
    var _a, _b;
    return (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.some(function (condition) { return condition.type === 'Ready' && condition.status === 'True'; });
};
export var getDataSourceCronJob = function (dataSource) {
    return getLabel(dataSource, DATA_SOURCE_CRONJOB_LABEL);
};
export var getDataSourceLastUpdated = function (dataSource) { var _a, _b, _c; return (_c = (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.find(function (c) { return c.type === 'Ready'; })) === null || _c === void 0 ? void 0 : _c.lastTransitionTime; };
export var isDataImportCronAutoUpdated = function (dataSource, dataImportCron) {
    var _a;
    var cronJob = getDataSourceCronJob(dataSource);
    return cronJob === ((_a = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _a === void 0 ? void 0 : _a.name);
};
export var isDataResourceOwnedBySSP = function (dataResource) {
    var _a, _b;
    return (((_b = (_a = dataResource === null || dataResource === void 0 ? void 0 : dataResource.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b[DATA_SOURCE_PRIMARY_RESOURCE_LABEL]) ===
        DATA_SOURCE_SSP_OWNER_VALUE);
};
//# sourceMappingURL=index.js.map