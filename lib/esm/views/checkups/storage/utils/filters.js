import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var status = {
    active: 'running',
    false: 'failed',
    true: 'succeeded',
    unknown: 'unknown',
};
var statusHandler = {
    get: function (mapper, prop) {
        var value = mapper[prop];
        if (value)
            return value;
        return status.unknown;
    },
};
var statusMapper = new Proxy(status, statusHandler);
export var filters = [
    {
        filter: function (_a, obj) {
            var _b;
            var selected = _a.selected;
            var value = statusMapper[(obj === null || obj === void 0 ? void 0 : obj.data, (_b = obj === null || obj === void 0 ? void 0 : obj.data) === null || _b === void 0 ? void 0 : _b['status.succeeded'])];
            return (selected === null || selected === void 0 ? void 0 : selected.length) === 0 || (selected === null || selected === void 0 ? void 0 : selected.includes(value));
        },
        filterGroupName: t('Status'),
        items: [
            { id: 'succeeded', title: t('Succeeded') },
            { id: 'failed', title: t('Failed') },
            { id: 'running', title: t('Running') },
            { id: 'unknown', title: t('Unknown') },
        ],
        reducer: function (obj) { var _a; return statusMapper[(_a = obj === null || obj === void 0 ? void 0 : obj.data) === null || _a === void 0 ? void 0 : _a['status.succeeded']]; },
        type: 'status',
    },
];
//# sourceMappingURL=filters.js.map