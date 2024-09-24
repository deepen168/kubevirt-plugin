import { modelToGroupVersionKind, StorageClassModel } from '@kubevirt-ui/kubevirt-api/console';
import { DEFAULT_STORAGE_CLASS_ANNOTATION } from '@kubevirt-utils/hooks/useDefaultStorage/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAnnotation, getName } from '@kubevirt-utils/resources/shared';
import { DESCRIPTION_ANNOTATION } from '@kubevirt-utils/resources/vm';
var isDefaultStorageClass = function (storageClass) { var _a, _b; return ((_b = (_a = storageClass === null || storageClass === void 0 ? void 0 : storageClass.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b[DEFAULT_STORAGE_CLASS_ANNOTATION]) === 'true'; };
export var getDefaultStorageClass = function (storageClasses) { return storageClasses === null || storageClasses === void 0 ? void 0 : storageClasses.find(isDefaultStorageClass); };
export var getSCSelectOptions = function (storageClasses) {
    return storageClasses === null || storageClasses === void 0 ? void 0 : storageClasses.map(function (sc) {
        var _a, _b, _c;
        var scName = getName(sc);
        var defaultSC = isDefaultStorageClass(sc) ? t('(default) | ') : '';
        var descriptionAnnotation = ((_a = getAnnotation(sc, DESCRIPTION_ANNOTATION)) === null || _a === void 0 ? void 0 : _a.concat(' | ')) || '';
        var scType = ((_b = sc === null || sc === void 0 ? void 0 : sc.parameters) === null || _b === void 0 ? void 0 : _b.type) ? ' | '.concat((_c = sc === null || sc === void 0 ? void 0 : sc.parameters) === null || _c === void 0 ? void 0 : _c.type) : '';
        var description = "".concat(defaultSC).concat(descriptionAnnotation).concat(sc === null || sc === void 0 ? void 0 : sc.provisioner).concat(scType);
        return {
            children: scName,
            description: description,
            groupVersionKind: modelToGroupVersionKind(StorageClassModel),
            value: scName,
        };
    });
};
//# sourceMappingURL=helpers.js.map