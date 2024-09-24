var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { PersistentVolumeClaimModel } from '@kubevirt-ui/kubevirt-api/console';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { BOOT_SOURCE } from '@kubevirt-utils/resources/template';
import { getTemplateBootSourceType, isDataSourceCloning, isDataSourceReady, } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { getGroupVersionKindForModel, useK8sWatchResources, } from '@openshift-console/dynamic-plugin-sdk';
/**
 * Hook that returns the DataSources and PVCs that are available for the templates
 * @param templates - the templates to filter
 * @param templatesLoaded - whether the templates are loaded
 * @returns availablePVCs and availableDatasources, both Sets of strings representing the available sources. `{namespace-name}`
 */
export var useAvailableDataSourcesAndPVCs = function (templates, templatesLoaded) {
    var _a = React.useMemo(function () {
        if (!templatesLoaded)
            return {
                uniqueDataSources: {},
                uniquePVCs: {},
            };
        return templates.reduce(function (acc, template) {
            var _a, _b;
            var bootSource = getTemplateBootSourceType(template);
            if (bootSource.type === BOOT_SOURCE.DATA_SOURCE) {
                var ds = (_a = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _a === void 0 ? void 0 : _a.sourceRef;
                acc.uniqueDataSources["".concat(ds === null || ds === void 0 ? void 0 : ds.namespace, "-").concat(ds === null || ds === void 0 ? void 0 : ds.name)] = {
                    groupVersionKind: getGroupVersionKindForModel(DataSourceModel),
                    isList: false,
                    name: ds === null || ds === void 0 ? void 0 : ds.name,
                    namespace: ds === null || ds === void 0 ? void 0 : ds.namespace,
                };
            }
            if (bootSource.type === BOOT_SOURCE.PVC) {
                var pvc = (_b = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _b === void 0 ? void 0 : _b.pvc;
                acc.uniquePVCs["".concat(pvc === null || pvc === void 0 ? void 0 : pvc.namespace, "-").concat(pvc === null || pvc === void 0 ? void 0 : pvc.name)] = {
                    groupVersionKind: getGroupVersionKindForModel(PersistentVolumeClaimModel),
                    isList: false,
                    name: pvc === null || pvc === void 0 ? void 0 : pvc.name,
                    namespace: pvc === null || pvc === void 0 ? void 0 : pvc.namespace,
                };
            }
            return acc;
        }, { uniqueDataSources: {}, uniquePVCs: {} });
    }, [templates, templatesLoaded]), uniqueDataSources = _a.uniqueDataSources, uniquePVCs = _a.uniquePVCs;
    var watchDataSources = useK8sWatchResources(uniqueDataSources);
    var watchPVCs = useK8sWatchResources(uniquePVCs);
    var loaded = Object.values(__assign(__assign({}, watchDataSources), watchPVCs)).every(function (watchResource) { return watchResource.loaded || watchResource.loadError; });
    var _b = Object.values(watchDataSources).reduce(function (acc, _a) {
        var _b, _c, _d, _e;
        var dataSource = _a.data;
        if (isDataSourceReady(dataSource)) {
            acc.availableDatasources["".concat((_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _b === void 0 ? void 0 : _b.namespace, "-").concat((_c = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _c === void 0 ? void 0 : _c.name)] = dataSource;
            return acc;
        }
        if (isDataSourceCloning(dataSource)) {
            acc.cloneInProgressDatasources["".concat((_d = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _d === void 0 ? void 0 : _d.namespace, "-").concat((_e = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _e === void 0 ? void 0 : _e.name)] = dataSource;
            return acc;
        }
        return acc;
    }, { availableDatasources: {}, cloneInProgressDatasources: {} }), availableDatasources = _b.availableDatasources, cloneInProgressDatasources = _b.cloneInProgressDatasources;
    var availablePVCs = new Set(Object.values(watchPVCs).map(function (_a) {
        var _b, _c;
        var pvc = _a.data;
        return "".concat((_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.namespace, "-").concat((_c = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _c === void 0 ? void 0 : _c.name);
    }));
    return { availableDatasources: availableDatasources, availablePVCs: availablePVCs, cloneInProgressDatasources: cloneInProgressDatasources, loaded: loaded };
};
//# sourceMappingURL=useAvailableDataSourcesAndPVCs.js.map