import * as React from 'react';
import { BOOT_SOURCE, isDefaultVariantTemplate, useVmTemplates, } from '@kubevirt-utils/resources/template';
import { getTemplateBootSourceType } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { useAvailableDataSourcesAndPVCs } from './useAvailableDataSourcesAndPVCs';
export var useTemplatesWithAvailableSource = function (_a) {
    var namespace = _a.namespace, onlyAvailable = _a.onlyAvailable, onlyDefault = _a.onlyDefault;
    var _b = useVmTemplates(namespace), loaded = _b.loaded, loadError = _b.loadError, templates = _b.templates;
    var _c = useAvailableDataSourcesAndPVCs(templates, loaded), availableDatasources = _c.availableDatasources, availablePVCs = _c.availablePVCs, bootSourcesLoaded = _c.loaded;
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
        error: loadError,
        loaded: loaded,
        templates: filteredTemplates,
    };
};
//# sourceMappingURL=useTemplatesWithAvailableSource.js.map