import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateOS, HIDE_DEPRECATED_TEMPLATES, HIDE_DEPRECATED_TEMPLATES_KEY, isDefaultVariantTemplate, isDeprecatedTemplate, OS_NAMES, } from '@kubevirt-utils/resources/template';
import { getItemNameWithOther, includeFilter } from '@kubevirt-utils/utils/utils';
import { getTemplateProviderName } from '../../utils/selectors';
var useTemplateProviders = function () {
    var t = useKubevirtTranslation().t;
    return [
        {
            id: 'Red Hat',
            title: t('Red Hat'),
        },
        {
            id: 'Red Hat - Tech Preview',
            title: t('Red Hat - Tech Preview'),
        },
        {
            id: 'Other',
            title: t('Other'),
        },
    ];
};
var useVirtualMachineTemplatesFilters = function (availableTemplatesUID) {
    var t = useKubevirtTranslation().t;
    var providers = useTemplateProviders();
    return [
        {
            filter: function (availableResourceNames, obj) { var _a; return ((_a = availableResourceNames === null || availableResourceNames === void 0 ? void 0 : availableResourceNames.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 || !isDeprecatedTemplate(obj); },
            filterGroupName: ' ',
            items: [
                {
                    id: HIDE_DEPRECATED_TEMPLATES_KEY,
                    title: t('Hide deprecated templates'),
                },
            ],
            reducer: function (obj) { return isDeprecatedTemplate(obj) && HIDE_DEPRECATED_TEMPLATES_KEY; },
            type: HIDE_DEPRECATED_TEMPLATES,
        },
        {
            filter: function (_a, obj) {
                var selected = _a.selected;
                return (selected === null || selected === void 0 ? void 0 : selected.length) === 0 || isDefaultVariantTemplate(obj);
            },
            filterGroupName: t('Type'),
            items: [
                {
                    id: 'is-default',
                    title: t('Default templates'),
                },
            ],
            reducer: function (obj) { return (isDefaultVariantTemplate(obj) ? 'is-default' : ''); },
            type: 'is-default-template',
        },
        {
            filter: function (_a, obj) {
                var selected = _a.selected;
                return (selected === null || selected === void 0 ? void 0 : selected.length) === 0 || availableTemplatesUID.has(obj.metadata.uid);
            },
            filterGroupName: t('Boot source'),
            items: [
                {
                    id: 'available',
                    title: t('Boot source available'),
                },
            ],
            reducer: function (obj) { return (availableTemplatesUID.has(obj.metadata.uid) ? 'available' : ''); },
            type: 'boot-source-available',
        },
        {
            filter: function (availableTemplateProviders, obj) {
                return includeFilter(availableTemplateProviders, providers, getTemplateProviderName(obj));
            },
            filterGroupName: t('Template provider'),
            items: providers,
            reducer: function (obj) { return getItemNameWithOther(getTemplateProviderName(obj), providers); },
            type: 'template-provider',
        },
        {
            filter: function (availableOsNames, obj) {
                return includeFilter(availableOsNames, OS_NAMES, getTemplateOS(obj));
            },
            filterGroupName: t('Operating system'),
            items: OS_NAMES,
            reducer: function (obj) { return getItemNameWithOther(getTemplateOS(obj), OS_NAMES); },
            type: 'osName',
        },
    ];
};
export default useVirtualMachineTemplatesFilters;
//# sourceMappingURL=useVirtualMachineTemplatesFilters.js.map