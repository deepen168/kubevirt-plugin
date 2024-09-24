import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import MigrationPolicyDetailsPage from '../tabs/details/MigrationPolicyDetailsPage';
import MigrationPolicyYAMLPage from '../tabs/yaml/MigrationPolicyYAMLPage';
export var useMigrationPolicyTabs = function () {
    var t = useKubevirtTranslation().t;
    return [
        {
            component: MigrationPolicyDetailsPage,
            href: '',
            name: t('Details'),
        },
        {
            component: MigrationPolicyYAMLPage,
            href: 'yaml',
            name: t('YAML'),
        },
    ];
};
//# sourceMappingURL=useMigrationPolicyTabs.js.map