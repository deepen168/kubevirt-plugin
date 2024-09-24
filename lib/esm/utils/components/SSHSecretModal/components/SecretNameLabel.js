import React from 'react';
import { modelToGroupVersionKind, SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
var SecretNameLabel = function (_a) {
    var secretName = _a.secretName;
    var t = useKubevirtTranslation().t;
    if (isEmpty(secretName))
        return React.createElement("span", null, t('Not available'));
    return (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(SecretModel), linkTo: false, name: secretName }));
};
export default SecretNameLabel;
//# sourceMappingURL=SecretNameLabel.js.map