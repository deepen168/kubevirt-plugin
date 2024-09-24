import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
export var getBooleanText = function (value) { return (value ? t('Yes') : t('No')); };
export var getBandwidthPerMigrationText = function (bandwidth) {
    if (typeof bandwidth === 'string')
        return readableSizeUnit(bandwidth);
    return "".concat(bandwidth);
};
export var getCompletionTimeoutText = function (completionTimeout) {
    return completionTimeout ? "".concat(completionTimeout, " sec") : NO_DATA_DASH;
};
export var migrationsConfigTooltipFields = [
    {
        field: 'bandwidthPerMigration',
        getDisplayText: getBandwidthPerMigrationText,
        label: t('Bandwidth per migration'),
    },
    { field: 'allowAutoConverge', getDisplayText: getBooleanText, label: t('Auto converge') },
    { field: 'allowPostCopy', getDisplayText: getBooleanText, label: t('Post copy') },
    {
        field: 'completionTimeoutPerGiB',
        getDisplayText: getCompletionTimeoutText,
        label: t('Completion timeout'),
    },
];
//# sourceMappingURL=utils.js.map