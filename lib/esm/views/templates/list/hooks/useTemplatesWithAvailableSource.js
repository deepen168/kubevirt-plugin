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
import * as React from 'react';
import { useAvailableDataSourcesAndPVCs } from '@catalog/templatescatalog/hooks/useAvailableDataSourcesAndPVCs';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { BOOT_SOURCE, isDefaultVariantTemplate, TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_LABEL, TEMPLATE_TYPE_VM, } from '@kubevirt-utils/resources/template';
import { getTemplateBootSourceType } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { getGroupVersionKindForModel, Operator, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
export var useTemplatesWithAvailableSource = function (_a) {
    var fieldSelector = _a.fieldSelector, namespace = _a.namespace, onlyAvailable = _a.onlyAvailable, onlyDefault = _a.onlyDefault, selector = _a.selector;
    var _b = useK8sWatchResource({
        fieldSelector: fieldSelector,
        groupVersionKind: getGroupVersionKindForModel(TemplateModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
        selector: __assign(__assign({}, (selector || [])), { matchExpressions: [
                {
                    key: TEMPLATE_TYPE_LABEL,
                    operator: Operator.In,
                    values: [TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_VM],
                },
            ] }),
    }), templates = _b[0], loaded = _b[1], loadError = _b[2];
    var _c = useAvailableDataSourcesAndPVCs(templates, loaded), availableDatasources = _c.availableDatasources, availablePVCs = _c.availablePVCs, cloneInProgressDatasources = _c.cloneInProgressDatasources, bootSourcesLoaded = _c.loaded;
    var availableTemplates = React.useMemo(function () {
        var isReady = loaded && availableDatasources && availablePVCs;
        var temps = isReady &&
            templates.reduce(function (acc, template) {
                var _a, _b;
                var bootSource = getTemplateBootSourceType(template);
                // data sources
                if (bootSource.type === BOOT_SOURCE.DATA_SOURCE) {
                    var ds = (_a = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _a === void 0 ? void 0 : _a.sourceRef;
                    if (availableDatasources["".concat(ds.namespace, "-").concat(ds.name)]) {
                        acc.push(template);
                    }
                    return acc;
                }
                // pvcs
                if (bootSource.type === BOOT_SOURCE.PVC) {
                    var pvc = (_b = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _b === void 0 ? void 0 : _b.pvc;
                    if (availablePVCs.has("".concat(pvc.namespace, "-").concat(pvc.name))) {
                        acc.push(template);
                    }
                    return acc;
                }
                if (bootSource.type !== BOOT_SOURCE.NONE) {
                    acc.push(template);
                }
                return acc;
            }, []);
        return temps || [];
    }, [availableDatasources, availablePVCs, loaded, templates]);
    var filteredTemplates = React.useMemo(function () {
        return (onlyAvailable ? availableTemplates : templates).filter(function (template) {
            return onlyDefault ? isDefaultVariantTemplate(template) : true;
        });
    }, [availableTemplates, onlyAvailable, onlyDefault, templates]);
    var availableTemplatesUID = React.useMemo(function () { return new Set(availableTemplates.map(function (template) { return template.metadata.uid; })); }, [availableTemplates]);
    return {
        availableDatasources: availableDatasources,
        availableTemplatesUID: availableTemplatesUID,
        bootSourcesLoaded: bootSourcesLoaded,
        cloneInProgressDatasources: cloneInProgressDatasources,
        error: loadError,
        loaded: loaded,
        templates: filteredTemplates,
    };
};
//# sourceMappingURL=useTemplatesWithAvailableSource.js.map