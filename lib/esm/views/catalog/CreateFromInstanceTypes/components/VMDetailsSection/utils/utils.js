import { DEFAULT_PREFERENCE_LABEL, PREFERENCE_DISPLAY_NAME_KEY, } from '@catalog/CreateFromInstanceTypes/utils/constants';
import { DYNAMIC_CREDENTIALS_SUPPORT } from '@kubevirt-utils/components/DynamicSSHKeyInjection/constants/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAnnotation, getLabel } from '@kubevirt-utils/resources/shared';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
export var getOSFromDefaultPreference = function (bootableVolume, preferencesMap) {
    var defaultPreferenceName = getLabel(bootableVolume, DEFAULT_PREFERENCE_LABEL);
    var defaultPreference = preferencesMap === null || preferencesMap === void 0 ? void 0 : preferencesMap[defaultPreferenceName];
    var defaultPreferenceDisplayName = getAnnotation(defaultPreference, PREFERENCE_DISPLAY_NAME_KEY, '');
    return defaultPreferenceDisplayName;
};
export var getCPUAndMemoryFromDefaultInstanceType = function (instanceType) {
    var _a, _b, _c, _d;
    var cpu = (_b = (_a = instanceType === null || instanceType === void 0 ? void 0 : instanceType.spec) === null || _a === void 0 ? void 0 : _a.cpu) === null || _b === void 0 ? void 0 : _b.guest;
    var memory = readableSizeUnit((_d = (_c = instanceType === null || instanceType === void 0 ? void 0 : instanceType.spec) === null || _c === void 0 ? void 0 : _c.memory) === null || _d === void 0 ? void 0 : _d.guest);
    return t('{{cpu}} CPU | {{memory}} Memory', { cpu: cpu, memory: memory });
};
export var dataSourceHasDynamicSSHLabel = function (pvcSource, selectedBootableVolume) {
    return getLabel(pvcSource, DYNAMIC_CREDENTIALS_SUPPORT) ||
        getLabel(selectedBootableVolume, DYNAMIC_CREDENTIALS_SUPPORT);
};
//# sourceMappingURL=utils.js.map