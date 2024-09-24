import MigrationPolicyModel from '@kubevirt-ui/kubevirt-api/console/models/MigrationPolicyModel';
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
    return completionTimeout !== undefined ? "".concat(completionTimeout, " sec") : NO_DATA_DASH;
};
export var getEmptyMigrationPolicy = function () { return ({
    apiVersion: "".concat(MigrationPolicyModel.apiGroup, "/").concat(MigrationPolicyModel.apiVersion),
    kind: MigrationPolicyModel.kind,
    metadata: { annotations: {} },
    spec: { selectors: {} },
}); };
//# sourceMappingURL=utils.js.map