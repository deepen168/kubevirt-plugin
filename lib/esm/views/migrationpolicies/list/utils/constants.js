import { MigrationPolicyModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var migrationPoliciesPageBaseURL = "/k8s/cluster/".concat(MigrationPolicyModelRef);
export var createItems = {
    form: t('With form'),
    yaml: t('With YAML'),
};
//# sourceMappingURL=constants.js.map