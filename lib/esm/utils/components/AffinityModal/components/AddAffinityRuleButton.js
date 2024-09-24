import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';
var AddAffinityRuleButton = function (_a) {
    var isLinkButton = _a.isLinkButton, onAffinityClickAdd = _a.onAffinityClickAdd;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Button, { className: isLinkButton ? 'pf-m-link--align-left' : '', icon: isLinkButton && React.createElement(PlusCircleIcon, null), onClick: onAffinityClickAdd, variant: isLinkButton ? ButtonVariant.link : ButtonVariant.secondary }, t('Add affinity rule')));
};
export default AddAffinityRuleButton;
//# sourceMappingURL=AddAffinityRuleButton.js.map