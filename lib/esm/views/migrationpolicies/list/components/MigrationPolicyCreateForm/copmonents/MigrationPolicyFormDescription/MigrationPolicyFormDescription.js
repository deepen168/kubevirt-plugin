import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
var MigrationPolicyFormDescription = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Text, { component: TextVariants.p }, t('MigrationPolicy help you differentiate between various workloads. Adding MigrationPolicy will allow you to set priorities and security segregation per each workload.')));
};
export default MigrationPolicyFormDescription;
//# sourceMappingURL=MigrationPolicyFormDescription.js.map