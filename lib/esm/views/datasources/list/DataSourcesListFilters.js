import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getDataSourceCronJob } from '../utils';
export var getDataImportCronFilter = function () { return [
    {
        filter: function (_a, obj) {
            var selected = _a.selected;
            return (selected === null || selected === void 0 ? void 0 : selected.length) === 0 || Boolean(getDataSourceCronJob(obj));
        },
        filterGroupName: t('Source'),
        items: [
            {
                id: 'available',
                title: t('DataImportCron available'),
            },
        ],
        reducer: function (obj) { return (getDataSourceCronJob(obj) ? 'available' : ''); },
        type: 'data-cron-available',
    },
]; };
//# sourceMappingURL=DataSourcesListFilters.js.map